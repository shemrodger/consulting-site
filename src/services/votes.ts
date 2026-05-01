// ─────────────────────────────────────────────────────────────────────────────
// Vote service — pluggable backend for the V1 vs V2 popularity contest.
//
// Default: localStorage (per-browser, instant, no infra).
// Remote:  set VITE_VOTES_API to a JSON endpoint that supports:
//            GET  → { v1: number, v2: number }
//            POST { side: "v1" | "v2" } → { v1: number, v2: number }
//          Anything that returns this shape works (Vercel/Cloudflare function,
//          Supabase RPC, a tiny Express/Azure Function — your call).
//
// One vote per browser is enforced via localStorage regardless of backend.
// ─────────────────────────────────────────────────────────────────────────────

export type Side = "v1" | "v2";
export type Tally = { v1: number; v2: number };

const VOTED_KEY = "site:voted";          // "v1" | "v2" | null
const LOCAL_TALLY_KEY = "site:votes";    // local fallback tally

function resolveRemote(): string | undefined {
  const raw = import.meta.env.VITE_VOTES_API;
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return undefined; // reject non-HTTPS
    return raw;
  } catch {
    return undefined; // reject malformed values
  }
}

const REMOTE = resolveRemote();

function readLocalTally(): Tally {
  try {
    const raw = localStorage.getItem(LOCAL_TALLY_KEY);
    if (!raw) return { v1: 0, v2: 0 };
    const parsed = JSON.parse(raw);
    return {
      v1: Number(parsed.v1) || 0,
      v2: Number(parsed.v2) || 0,
    };
  } catch {
    return { v1: 0, v2: 0 };
  }
}

function writeLocalTally(t: Tally) {
  localStorage.setItem(LOCAL_TALLY_KEY, JSON.stringify(t));
}

export function getVotedSide(): Side | null {
  const v = localStorage.getItem(VOTED_KEY);
  return v === "v1" || v === "v2" ? v : null;
}

export async function fetchTally(): Promise<Tally> {
  if (REMOTE) {
    try {
      const res = await fetch(REMOTE, { method: "GET" });
      if (res.ok) return await res.json();
    } catch {
      /* fall through to local */
    }
  }
  return readLocalTally();
}

export async function castVote(side: Side): Promise<Tally> {
  if (getVotedSide()) {
    // Already voted — just return current tally.
    return fetchTally();
  }

  if (REMOTE) {
    try {
      const res = await fetch(REMOTE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ side }),
      });
      if (res.ok) {
        const tally = (await res.json()) as Tally;
        localStorage.setItem(VOTED_KEY, side);
        return tally;
      }
    } catch {
      /* fall through to local */
    }
  }

  const next = readLocalTally();
  next[side] = (next[side] || 0) + 1;
  writeLocalTally(next);
  localStorage.setItem(VOTED_KEY, side);
  return next;
}

export function clearVote() {
  localStorage.removeItem(VOTED_KEY);
}
