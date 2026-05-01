/**
 * Cloudflare Worker — global vote counter for the V1 vs V2 popularity contest.
 *
 * KV schema (flat — no DB needed):
 *   "v1"       → string(number)   running vote totals
 *   "v2"       → string(number)
 *   "rl:<IP>"  → "1" (TTL 86400s) per-IP rate-limit flag
 *
 * Endpoints:
 *   GET  /   → { v1: number, v2: number }
 *   POST /   body: { side: "v1" | "v2" }  → { v1: number, v2: number }
 *
 * Deploy:
 *   1. wrangler kv:namespace create VOTES
 *      Copy the returned ID into wrangler.toml [[kv_namespaces]].id
 *   2. wrangler deploy
 *   3. Set VITE_VOTES_API=https://<worker-url> in your .env.local
 */

export interface Env {
  VOTES: KVNamespace;
}

/** Origins allowed to call this Worker. Add your production domain here. */
const ALLOWED_ORIGINS = new Set([
  "https://shem-rodger.com",
  "https://www.shem-rodger.com",
  // Local dev — remove these if you want to lock down tighter
  "http://localhost:5173",
  "http://localhost:4173",
]);

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : "null";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const headers = corsHeaders(origin);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method === "GET") {
      const [v1Raw, v2Raw] = await Promise.all([
        env.VOTES.get("v1"),
        env.VOTES.get("v2"),
      ]);
      return Response.json(
        { v1: Number(v1Raw ?? 0), v2: Number(v2Raw ?? 0) },
        { headers }
      );
    }

    if (request.method === "POST") {
      // ── IP rate limit: one vote per IP per 24 hours ─────────────────────
      const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
      const rateLimitKey = `rl:${ip}`;
      const alreadyVoted = await env.VOTES.get(rateLimitKey);
      if (alreadyVoted) {
        return Response.json(
          { error: "Already voted" },
          { status: 429, headers }
        );
      }

      // ── Parse and validate body ──────────────────────────────────────────
      let side: string;
      try {
        const body = (await request.json()) as { side?: unknown };
        side = typeof body.side === "string" ? body.side : "";
      } catch {
        return Response.json(
          { error: "Invalid JSON" },
          { status: 400, headers }
        );
      }

      if (side !== "v1" && side !== "v2") {
        return Response.json(
          { error: 'side must be "v1" or "v2"' },
          { status: 400, headers }
        );
      }

      // ── Record vote + set rate-limit flag (expires after 24 h) ──────────
      const current = Number((await env.VOTES.get(side)) ?? 0);
      await Promise.all([
        env.VOTES.put(side, String(current + 1)),
        env.VOTES.put(rateLimitKey, "1", { expirationTtl: 86400 }),
      ]);

      const [v1Raw, v2Raw] = await Promise.all([
        env.VOTES.get("v1"),
        env.VOTES.get("v2"),
      ]);
      return Response.json(
        { v1: Number(v1Raw ?? 0), v2: Number(v2Raw ?? 0) },
        { headers }
      );
    }

    return Response.json(
      { error: "Method not allowed" },
      { status: 405, headers }
    );
  },
};
