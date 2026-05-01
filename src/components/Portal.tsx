import { useEffect, useMemo, useState } from "react";
import { meta, contact } from "../content/sharedContent";
import { castVote, fetchTally, getVotedSide, type Side, type Tally } from "../services/votes";

interface Props {
  onChoose: (version: 1 | 2) => void;
}

export default function Portal({ onChoose }: Props) {
  const [tally, setTally] = useState<Tally>({ v1: 0, v2: 0 });
  const [voted, setVoted] = useState<Side | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setVoted(getVotedSide());
    fetchTally().then(setTally).catch(() => {});
    const t = setTimeout(() => setRevealed(true), 60);
    return () => clearTimeout(t);
  }, []);

  const total = tally.v1 + tally.v2;
  const v1Pct = total ? Math.round((tally.v1 / total) * 100) : 50;
  const v2Pct = 100 - v1Pct;

  const leader: Side | "tie" = useMemo(() => {
    if (tally.v1 === tally.v2) return "tie";
    return tally.v1 > tally.v2 ? "v1" : "v2";
  }, [tally]);

  async function vote(side: Side) {
    if (voted) return;
    const next = await castVote(side);
    setTally(next);
    setVoted(side);
  }

  return (
    <div className={`portal ${revealed ? "is-revealed" : ""}`}>
      <PortalStyles />
      <div className="portal-tint" aria-hidden />

      <div className="portal-card">

        {/* ── Identity ─────────────────────────────────────────── */}
        <header className="portal-identity">
          <span className="portal-dot" aria-hidden />
          <div className="portal-identity-text">
            <span className="portal-name">{meta.name}</span>
            <span className="portal-sep" aria-hidden>·</span>
            {/* <span className="portal-role">{meta.title}</span> */}
          </div>
          {contact.location && (
            <span className="portal-location">{meta.title}</span>
          )}
        </header>

        {/* ── Who I am ─────────────────────────────────────────── */}
        <div className="portal-bio">
          <h1 className="portal-headline">
            I help operational businesses find the constraint —
            <em> then fix the system around it.</em>
          </h1>
          <p className="portal-body">
            {/* Civil construction digital tools. ERP rescue. Workflow automation.
            Reporting that shows what actually matters. I don't deliver
            frameworks and decks — I deliver tools that run the business. */}
          </p>
          <div className="portal-focus-list" aria-label="Focus areas">
            {["Culture & Leadership", "Digital Systems", "Throughput & Performance", "Operational Clarity"].map((p, i, arr) => (
              <span key={p} className="portal-focus-item">
                {p}
                {i < arr.length - 1 && <span className="portal-focus-sep" aria-hidden>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── Decision moment ───────────────────────────────────── */}
        <div className="portal-prompt">
          <span className="portal-prompt-tag">
            {/* <span className="portal-prompt-tag-line" aria-hidden />
            Choose Your View
            <span className="portal-prompt-tag-line" aria-hidden /> */}
          </span>
          <h2 className="portal-prompt-question">
            Pick the presentation that suits you best.
          </h2>
          {total > 0 && leader !== "tie" ? (
            <p className="portal-prompt-crowd">
              {total} {total === 1 ? "person has" : "people have"} preferred{" "}
              <strong>{leader === "v1" ? "Considered" : "Expressive"}</strong> so far
            </p>
          ) : (
            <p className="portal-prompt-crowd portal-prompt-crowd-empty">
              No votes yet - set the tone
            </p>
          )}
          <div className="portal-prompt-arrows" aria-hidden>
            <span className="portal-prompt-arrow">↓</span>
            <span className="portal-prompt-arrow">↓</span>
          </div>
        </div>

        {/* ── Two choices ──────────────────────────────────────── */}
        <div className="portal-choices">
          <Choice
            side="v1"
            label="Considered"
            labelFont="serif"
            // descriptor="Editorial · Precise · Quiet"
            detail="Warm paper, measured whitespace, and work that speaks plainly. For those who read everything."
            pct={v1Pct}
            count={tally.v1}
            voted={voted}
            onVote={() => vote("v1")}
            onEnter={() => onChoose(1)}
          />
          <div className="portal-or" aria-hidden>or</div>
          <Choice
            side="v2"
            label="Expressive"
            labelFont="sans"
            // descriptor="Kinetic · Bold · Electric"
            detail="Dark canvas, motion, visual energy. Same person and conviction — turned all the way up."
            pct={v2Pct}
            count={tally.v2}
            voted={voted}
            onVote={() => vote("v2")}
            onEnter={() => onChoose(2)}
          />
        </div>

        {/* ── Post-vote ────────────────────────────────────────── */}
        {voted && (
          <p className="portal-voted-msg" role="status">
            Good choice — now go see it.
          </p>
        )}

        {/* ── Skip ────────────────────────────────────────────── */}
        <div className="portal-skip-row">
          <button type="button" onClick={() => onChoose(1)}>
            Just take me in →
          </button>
        </div>

      </div>
    </div>
  );
}

// ─── Choice panel ─────────────────────────────────────────────────────────────
function Choice({
  side, label, labelFont, descriptor, detail,
  pct, count, voted, onVote, onEnter,
}: {
  side: Side;
  label: string;
  labelFont: "serif" | "sans";
  descriptor?: string;
  detail: string;
  pct: number;
  count: number;
  voted: Side | null;
  onVote: () => void;
  onEnter: () => void;
}) {
  const hasVoted = voted !== null;
  const myVote = voted === side;
  return (
    <article className={`pchoice pchoice-${side}`}>
      {/* Popularity bar */}
      <div className="pchoice-bar-wrap">
        <div className="pchoice-bar">
          <div className="pchoice-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="pchoice-bar-row">
          <span className="pchoice-pct">{pct}%</span>
          {/* {isLeader && count > 0 && (
            <span className="pchoice-leader-tag">most popular</span>
          )} */}
          <span className="pchoice-count">{count} vote{count !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {descriptor && <p className="pchoice-descriptor">{descriptor}</p>}
      <h2
        className="pchoice-label"
        style={{ fontFamily: labelFont === "serif" ? "'Playfair Display', Georgia, serif" : "'Bricolage Grotesque', 'Space Grotesk', sans-serif" }}
      >
        {label}
      </h2>
      <p className="pchoice-detail">{detail}</p>

      <div className="pchoice-actions">
        <button className="pchoice-enter" type="button" onClick={onEnter}>
          Enter <span aria-hidden>→</span>
        </button>
        <button
          className={`pchoice-vote${myVote ? " is-voted" : ""}`}
          type="button"
          onClick={onVote}
          disabled={hasVoted}
        >
          {myVote ? "♥ Voted" : hasVoted ? "Already voted" : "♡ Vote"}
        </button>
      </div>
    </article>
  );
}

// ─── CSS ──────────────────────────────────────────────────────────────────────
function PortalStyles() {
  return (
    <style>{`
/* ─── Overlay ─────────────────────────────────────────────────────────────── */
.portal {
  position: fixed; inset: 0; z-index: 9997;
  display: flex; align-items: center; justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  overflow-y: auto;
  background: rgba(5, 4, 8, 0.72);
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #f5f3ee;
  opacity: 0; transition: opacity 0.5s ease;
}
.portal.is-revealed { opacity: 1; }
.portal * { box-sizing: border-box; }

/* Very faint split-tint behind the glass — just enough to suggest the worlds */
.portal-tint {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background: linear-gradient(
    to right,
    rgba(245,240,230,0.055) 0%, rgba(245,240,230,0.015) 46%,
    rgba(12,10,22,0.055) 54%, rgba(12,10,22,0.055) 100%
  );
}

/* ─── Card ────────────────────────────────────────────────────────────────── */
.portal-card {
  position: relative; z-index: 1;
  width: min(820px, 100%);
  background: rgba(9, 8, 14, 0.88);
  backdrop-filter: blur(40px) saturate(0.4);
  -webkit-backdrop-filter: blur(40px) saturate(0.4);
  border: 1px solid rgba(245,243,238,0.10);
  border-radius: 24px;
  padding: clamp(28px, 4.5vw, 48px);
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,0.03),
    0 50px 120px rgba(0,0,0,0.7);
  animation: portal-in 0.9s cubic-bezier(.16,1,.3,1) 0.06s backwards;
  display: flex; flex-direction: column; gap: 28px;
}

/* ─── Identity header ─────────────────────────────────────────────────────── */
.portal-identity {
  display: flex; flex-wrap: wrap; align-items: center; gap: 10px;
}
.portal-dot {
  width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0;
  background: #c8532a;
  box-shadow: 0 0 12px rgba(200,83,42,0.7);
  animation: portal-pulse 2.8s ease-in-out infinite;
}
.portal-identity-text {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
}
.portal-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic; font-weight: 600;
  font-size: clamp(17px, 1.5vw, 20px);
  color: rgba(245,243,238,0.95);
  letter-spacing: -0.01em;
}
.portal-sep { color: rgba(245,243,238,0.2); }
.portal-role {
  font-size: 13px; letter-spacing: 0.04em;
  color: rgba(245,243,238,0.42);
  font-weight: 400;
}
.portal-location {
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(245,243,238,0.22);
}
@media (max-width: 540px) { .portal-location { display: none; } }

/* ─── Bio block ───────────────────────────────────────────────────────────── */
.portal-bio {
  display: flex; flex-direction: column; gap: 14px;
  animation: portal-rise 0.9s cubic-bezier(.16,1,.3,1) 0.2s backwards;
}
.portal-headline {
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400; font-style: normal;
  font-size: clamp(24px, 3.2vw, 38px);
  line-height: 1.2; letter-spacing: -0.02em;
  color: rgba(245,243,238,0.92);
}
.portal-headline em {
  font-style: italic;
  color: rgba(245,243,238,0.65);
}
.portal-body {
  margin: 0;
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.65;
  color: rgba(245,243,238,0.45);
  max-width: 600px;
}
.portal-focus-list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
  margin-top: 2px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(245,243,238,0.44);
}
.portal-focus-item {
  display: inline-flex;
  align-items: center;
}
.portal-focus-sep {
  margin: 0 10px;
  color: rgba(245,243,238,0.26);
}

/* ─── Decision prompt ─────────────────────────────────────────────────────── */
.portal-prompt {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  text-align: center;
  padding: 0;
  animation: portal-rise 0.9s cubic-bezier(.16,1,.3,1) 0.32s backwards;
}
.portal-prompt-tag {
  display: inline-flex; align-items: center; gap: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(245,243,238,0.42);
}
.portal-prompt-tag-line {
  display: inline-block; width: 28px; height: 1px;
  background: rgba(245,243,238,0.2);
}
.portal-prompt-question {
  margin: 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-weight: 500;
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.4; letter-spacing: 0;
  color: rgba(245,243,238,0.8);
  max-width: 560px;
}
.portal-prompt-crowd {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
  color: rgba(245,243,238,0.34);
}
.portal-prompt-crowd strong {
  color: rgba(245,243,238,0.72);
  font-weight: 700;
}
.portal-prompt-crowd-empty { color: rgba(245,243,238,0.28); }
.portal-prompt-arrows {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  width: 100%;
  margin-top: 4px;
  font-size: 22px;
  color: rgba(245,243,238,0.32);
}
.portal-prompt-arrow {
  display: inline-flex; justify-content: center;
  animation: portal-bounce 1.8s ease-in-out infinite;
}
.portal-prompt-arrow:nth-child(2) { animation-delay: 0.25s; }
@media (max-width: 560px) {
  .portal-prompt-arrows { grid-template-columns: 1fr; }
  .portal-prompt-arrow:nth-child(2) { display: none; }
}

/* ─── Choices ─────────────────────────────────────────────────────────────── */
.portal-choices {
  display: grid; grid-template-columns: 1fr auto 1fr; gap: 10px;
  animation: portal-rise 0.9s cubic-bezier(.16,1,.3,1) 0.42s backwards;
}
@media (max-width: 560px) {
  .portal-choices { grid-template-columns: 1fr; }
  .portal-or { padding: 4px 0; }
}
.portal-or {
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
  color: rgba(245,243,238,0.18); padding: 0 4px;
}

/* Panel */
.pchoice {
  padding: 20px 18px;
  border-radius: 16px;
  border: 1px solid rgba(245,243,238,0.07);
  background: rgba(245,243,238,0.02);
  display: flex; flex-direction: column; gap: 10px;
  transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s cubic-bezier(.16,1,.3,1);
  cursor: default;
}
.pchoice:hover {
  border-color: rgba(245,243,238,0.16);
  background: rgba(245,243,238,0.04);
  transform: translateY(-3px);
}

/* Vote bar */
.pchoice-bar-wrap { display: flex; flex-direction: column; gap: 5px; }
.pchoice-bar {
  height: 2px; border-radius: 1px;
  background: rgba(245,243,238,0.08);
  position: relative; overflow: hidden;
}
.pchoice-bar-fill {
  position: absolute; inset: 0 auto 0 0; border-radius: 1px;
  background: rgba(245,243,238,0.45);
  transition: width 1.2s cubic-bezier(.16,1,.3,1);
}
.pchoice-bar-row {
  display: flex; align-items: center; gap: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.1em;
  color: rgba(245,243,238,0.25);
}
.pchoice-pct { color: rgba(245,243,238,0.45); }
.pchoice-leader-tag {
  font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #c8532a; border: 1px solid rgba(200,83,42,0.3);
  padding: 1px 7px; border-radius: 999px;
}
.pchoice-count { margin-left: auto; }

/* Descriptor + Label */
.pchoice-descriptor {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(245,243,238,0.25);
}
.pchoice-label {
  margin: 0;
  font-size: clamp(28px, 3.8vw, 44px);
  line-height: 1; letter-spacing: -0.025em;
  color: rgba(245,243,238,0.9);
}
.pchoice-detail {
  margin: 0; flex: 1;
  font-size: 13px; line-height: 1.55;
  color: rgba(245,243,238,0.35);
}

/* Buttons — intentionally identical across both panels */
.pchoice-actions {
  display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px;
}
.pchoice-enter, .pchoice-vote {
  padding: 9px 16px; border-radius: 999px;
  font-family: inherit; font-size: 12px; font-weight: 600; letter-spacing: 0.03em;
  cursor: pointer; border: 1px solid rgba(245,243,238,0.14);
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
}
.pchoice-enter {
  background: rgba(245,243,238,0.08);
  color: rgba(245,243,238,0.88);
}
.pchoice-enter:hover {
  background: rgba(245,243,238,0.14);
  border-color: rgba(245,243,238,0.28);
  transform: translateX(2px);
}
.pchoice-vote {
  background: transparent; color: rgba(245,243,238,0.3);
  border-color: rgba(245,243,238,0.08);
}
.pchoice-vote:hover:not(:disabled) {
  color: rgba(245,243,238,0.65);
  border-color: rgba(245,243,238,0.2);
}
.pchoice-vote.is-voted {
  color: #c8532a !important;
  border-color: rgba(200,83,42,0.35) !important;
}
.pchoice-vote:disabled { cursor: not-allowed; }

/* ─── Post-vote + skip ────────────────────────────────────────────────────── */
.portal-voted-msg {
  margin: 0; text-align: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic; font-size: 16px;
  color: rgba(245,243,238,0.55);
  animation: portal-rise 0.5s cubic-bezier(.16,1,.3,1);
}
.portal-skip-row {
  text-align: center;
  animation: portal-rise 0.9s cubic-bezier(.16,1,.3,1) 0.55s backwards;
}
.portal-skip-row button {
  background: none; border: none; cursor: pointer; padding: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(245,243,238,0.2); transition: color 0.2s;
}
.portal-skip-row button:hover { color: rgba(245,243,238,0.55); }

/* ─── Animations ──────────────────────────────────────────────────────────── */
@keyframes portal-bounce {
  0%, 100% { transform: translateY(0); opacity: 0.32; }
  50% { transform: translateY(6px); opacity: 0.85; }
}
@keyframes portal-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.6); opacity: 0.45; }
}
@keyframes portal-rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes portal-in {
  from { opacity: 0; transform: translateY(24px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .portal *, .portal *::before, .portal *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
    `}</style>
  );
}
