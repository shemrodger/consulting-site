import { useEffect, useRef, useState } from "react";
import {
  meta,
  hero,
  whatIDo,
  work,
  myEdge,
  howIWork,
  contact,
} from "../content/siteContent";

/**
 * V2 — "Fun" / playful artistic edition.
 * Fully isolated: no Tailwind classes, no shared components.
 * All styling lives inside the <style> block below, scoped with the `v2-` prefix.
 *
 * Surface vibe: funky, kinetic, electric.
 * Undertones: excellence, constraint-finding, culture, bold 10x execution.
 */
export default function V2Fun() {
  return (
    <div className="v2-root">
      <V2Styles />
      <Cursor />
      <V2Nav />
      <V2Hero />
      <Marquee
        items={[
          "Excellence",
          "10X Results",
          "Find the Constraint",
          "Build the Culture",
          "Bold Execution",
          "No Decks. Just Tools.",
          "Throughput > Activity",
          "Elite Standards",
        ]}
      />
      <V2Manifesto />
      <V2WhatIDo />
      <Marquee
        accent
        items={[
          "Diagnose · Simplify · Build · Measure · Coach",
          "One constraint. One focus. One leap.",
          "Performance is a system, not a slogan.",
        ]}
      />
      <V2Work />
      <V2Edge />
      <V2HowIWork />
      <V2Contact />
      <V2Footer />
    </div>
  );
}

// ─── Custom cursor halo ──────────────────────────────────────────────────────
function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} className="v2-cursor" aria-hidden />;
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function V2Nav() {
  return (
    <nav className="v2-nav">
      <a href="#top" className="v2-logo">
        <span className="v2-logo-dot" />
        {meta.name}
      </a>
      <div className="v2-nav-links">
        <a href="#what">What</a>
        <a href="#work">Work</a>
        <a href="#edge">Edge</a>
        <a href="#how">How</a>
        <a href="#contact" className="v2-nav-cta">
          Let's go →
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function V2Hero() {
  return (
    <section id="top" className="v2-hero">
      <div className="v2-blob v2-blob-1" />
      <div className="v2-blob v2-blob-2" />
      <div className="v2-blob v2-blob-3" />

      <div className="v2-hero-eyebrow">
        <span className="v2-pulse-dot" /> {hero.eyebrow.toUpperCase()} ·
        BUILT IN NEW ZEALAND
      </div>

      <h1 className="v2-hero-headline">
        <span className="v2-line">
          Find the <em className="v2-em-pink">constraint.</em>
        </span>
        <span className="v2-line v2-line-shift">
          Engineer the <em className="v2-em-cyan">culture.</em>
        </span>
        <span className="v2-line">
          Ship a{" "}
          <span className="v2-tenx">
            10
            <span className="v2-x">×</span>
          </span>{" "}
          result.
        </span>
      </h1>

      <p className="v2-hero-sub">
        I'm a performance partner for civil construction and operational
        businesses. We don't tinker — we find the one thing throttling your
        throughput, build the system around it, and put the standard back
        where it belongs:{" "}
        <span className="v2-underline-wave">excellence</span>.
      </p>

      <div className="v2-hero-ctas">
        <a href="#contact" className="v2-btn v2-btn-primary">
          <span>Book a conversation</span>
          <span className="v2-btn-arrow">→</span>
        </a>
        <a href="#work" className="v2-btn v2-btn-ghost">
          See selected work
        </a>
      </div>

      <div className="v2-scroll-hint">
        <span>SCROLL</span>
        <span className="v2-scroll-line" />
      </div>
    </section>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee({
  items,
  reverse = false,
  accent = false,
}: {
  items: string[];
  reverse?: boolean;
  accent?: boolean;
}) {
  const row = [...items, ...items, ...items];
  return (
    <div className={`v2-marquee ${accent ? "v2-marquee-accent" : ""}`}>
      <div
        className="v2-marquee-track"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {row.map((item, i) => (
          <span key={i} className="v2-marquee-item">
            {item}
            <span className="v2-marquee-star">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Manifesto ───────────────────────────────────────────────────────────────
function V2Manifesto() {
  const lines = [
    ["The standard is", "EXCELLENCE."],
    ["The method is", "CONSTRAINTS."],
    ["The medium is", "CULTURE."],
    ["The result is", "10×."],
  ];
  return (
    <section className="v2-manifesto">
      <div className="v2-manifesto-tag">// THE BRIEF</div>
      <div className="v2-manifesto-grid">
        {lines.map(([a, b], i) => (
          <div key={i} className="v2-manifesto-row" style={{ ["--i" as any]: i }}>
            <span className="v2-manifesto-a">{a}</span>
            <span className="v2-manifesto-b">{b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── What I Do ───────────────────────────────────────────────────────────────
function V2WhatIDo() {
  const palette = ["#ff2e63", "#00f0ff", "#fffd82", "#b8ff5f", "#c084fc"];
  return (
    <section id="what" className="v2-section">
      <SectionHeading kicker="01 / OFFER" title={whatIDo.heading} />
      <p className="v2-section-intro">{whatIDo.intro}</p>
      <div className="v2-cards">
        {whatIDo.services.map((s, i) => (
          <article
            key={s.number}
            className="v2-card"
            style={{
              ["--accent" as any]: palette[i % palette.length],
              ["--rot" as any]: `${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg`,
            }}
          >
            <div className="v2-card-num">{s.number}</div>
            <h3 className="v2-card-title">{s.title}</h3>
            <p className="v2-card-body">{s.body}</p>
            <div className="v2-card-glow" />
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Work ────────────────────────────────────────────────────────────────────
function V2Work() {
  return (
    <section id="work" className="v2-section">
      <SectionHeading kicker="02 / RECEIPTS" title={work.heading} />
      <p className="v2-section-intro">{work.intro}</p>
      <div className="v2-projects">
        {work.projects.map((p, i) => (
          <article key={p.id} className="v2-project" style={{ ["--i" as any]: i }}>
            <div className="v2-project-meta">
              <span className="v2-project-cat">{p.category}</span>
              <span className="v2-project-id">/{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="v2-project-name">{p.name}</h3>
            <div className="v2-project-grid">
              <div>
                <div className="v2-project-label">CONSTRAINT</div>
                <p>{p.problem}</p>
              </div>
              <div>
                <div className="v2-project-label v2-project-label-win">RESULT</div>
                <p>{p.outcome}</p>
              </div>
            </div>
            <div className="v2-tech">
              {p.tech.map((t) => (
                <span key={t} className="v2-tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Edge ────────────────────────────────────────────────────────────────────
function V2Edge() {
  return (
    <section id="edge" className="v2-section v2-edge">
      <SectionHeading kicker="03 / EDGE" title={myEdge.heading} />
      <p className="v2-section-intro">{myEdge.intro}</p>
      <div className="v2-pillars">
        {myEdge.pillars.map((p, i) => (
          <div key={p.title} className="v2-pillar" style={{ ["--i" as any]: i }}>
            <div className="v2-pillar-icon">{p.icon}</div>
            <h3 className="v2-pillar-title">{p.title}</h3>
            <p className="v2-pillar-body">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── How I Work ──────────────────────────────────────────────────────────────
function V2HowIWork() {
  const [active, setActive] = useState(0);
  return (
    <section id="how" className="v2-section">
      <SectionHeading kicker="04 / METHOD" title={howIWork.heading} />
      <p className="v2-section-intro">{howIWork.intro}</p>
      <div className="v2-steps">
        {howIWork.steps.map((s, i) => (
          <button
            type="button"
            key={s.number}
            className={`v2-step ${active === i ? "is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <div className="v2-step-num">{s.number}</div>
            <div className="v2-step-content">
              <h3 className="v2-step-title">{s.title}</h3>
              <p className="v2-step-body">{s.body}</p>
            </div>
            <div className="v2-step-bar" />
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function V2Contact() {
  return (
    <section id="contact" className="v2-contact">
      <div className="v2-contact-blob" />
      <div className="v2-contact-tag">// LET'S BUILD SOMETHING THAT MOVES</div>
      <h2 className="v2-contact-heading">
        Ready to{" "}
        <span className="v2-contact-flash">10×</span>{" "}
        the thing that's stuck?
      </h2>
      <p className="v2-contact-intro">{contact.intro}</p>
      <p className="v2-contact-cta">{contact.cta}</p>

      <div className="v2-contact-actions">
        <a className="v2-btn v2-btn-primary v2-btn-big" href={`mailto:${contact.email}`}>
          {contact.email} <span className="v2-btn-arrow">↗</span>
        </a>
        <a className="v2-btn v2-btn-ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div className="v2-contact-loc">{contact.location}</div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function V2Footer() {
  return (
    <footer className="v2-footer">
      <div>
        <div className="v2-footer-name">{meta.name}</div>
        <div className="v2-footer-tag">{meta.tagline}</div>
      </div>
      <div className="v2-footer-mark">
        © {new Date().getFullYear()} · Built bold.
      </div>
    </footer>
  );
}

// ─── Heading helper ──────────────────────────────────────────────────────────
function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="v2-heading">
      <div className="v2-kicker">{kicker}</div>
      <h2 className="v2-h2">{title}</h2>
    </header>
  );
}

// ─── All scoped CSS in one place ─────────────────────────────────────────────
function V2Styles() {
  return (
    <style>{`
.v2-root {
  --bg: #0a0a14;
  --surface: #12122a;
  --surface-2: #1a1a36;
  --ink: #f5f3ee;
  --muted: #9a9ab8;
  --pink: #ff2e63;
  --cyan: #00f0ff;
  --yellow: #fffd82;
  --lime: #b8ff5f;
  --violet: #c084fc;

  position: relative;
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Space Grotesk', system-ui, sans-serif;
  overflow: hidden;
  isolation: isolate;
}
.v2-root * { box-sizing: border-box; }

/* Subtle grid backdrop */
.v2-root::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
  z-index: 0;
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 80%);
}

/* Custom cursor halo */
.v2-cursor {
  position: fixed;
  top: 0; left: 0;
  width: 380px; height: 380px;
  margin: -190px 0 0 -190px;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(circle, rgba(255,46,99,0.18), rgba(0,240,255,0.12) 40%, transparent 70%);
  mix-blend-mode: screen;
  transition: transform 0.12s ease-out;
  filter: blur(12px);
}

@media (max-width: 720px) {
  .v2-cursor { display: none; }
}

/* Nav */
.v2-nav {
  position: relative; z-index: 10;
  display: flex; justify-content: space-between; align-items: center;
  padding: 28px clamp(20px, 5vw, 56px);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
}
.v2-logo {
  display: inline-flex; align-items: center; gap: 10px;
  color: var(--ink); text-decoration: none;
  font-weight: 700; letter-spacing: -0.01em;
}
.v2-logo-dot {
  width: 12px; height: 12px; border-radius: 50%;
  background: linear-gradient(135deg, var(--pink), var(--cyan));
  animation: v2pulse 2s ease-in-out infinite;
}
.v2-nav-links {
  display: flex; align-items: center; gap: 22px; font-size: 14px;
}
.v2-nav-links a {
  color: var(--muted); text-decoration: none; transition: color 0.2s;
}
.v2-nav-links a:hover { color: var(--ink); }
.v2-nav-cta {
  padding: 10px 16px; border-radius: 999px;
  background: var(--ink); color: var(--bg) !important;
  font-weight: 700;
  transition: transform 0.2s, background 0.2s;
}
.v2-nav-cta:hover {
  transform: translateY(-2px);
  background: var(--yellow);
}
@media (max-width: 640px) {
  .v2-nav-links a:not(.v2-nav-cta) { display: none; }
}

/* Hero */
.v2-hero {
  position: relative; z-index: 2;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 56px) clamp(80px, 12vw, 140px);
  min-height: 90vh;
  display: flex; flex-direction: column; justify-content: center;
}
.v2-hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.18em;
  color: var(--cyan); margin-bottom: 28px;
}
.v2-pulse-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--lime);
  box-shadow: 0 0 12px var(--lime);
  animation: v2pulse 1.6s ease-in-out infinite;
}
.v2-hero-headline {
  font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
  font-weight: 800;
  font-size: clamp(48px, 9vw, 132px);
  line-height: 0.92;
  letter-spacing: -0.035em;
  margin: 0 0 32px;
}
.v2-line {
  display: block;
  animation: v2riseIn 1s cubic-bezier(.16,1,.3,1) backwards;
}
.v2-line:nth-child(1) { animation-delay: 0.05s; }
.v2-line:nth-child(2) { animation-delay: 0.18s; }
.v2-line:nth-child(3) { animation-delay: 0.32s; }
.v2-line-shift { padding-left: clamp(20px, 8vw, 120px); }
.v2-em-pink, .v2-em-cyan {
  font-style: italic; font-family: 'Caveat', 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
}
.v2-em-pink { color: var(--pink); }
.v2-em-cyan { color: var(--cyan); }
.v2-tenx {
  display: inline-block;
  background: linear-gradient(120deg, var(--yellow), var(--pink), var(--cyan));
  background-size: 200% 200%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
  animation: v2gradient 4s ease infinite;
}
.v2-tenx .v2-x {
  display: inline-block;
  animation: v2spin 6s linear infinite;
  transform-origin: center;
}
.v2-hero-sub {
  max-width: 720px;
  font-size: clamp(16px, 1.4vw, 19px);
  line-height: 1.55;
  color: var(--muted);
  margin: 0 0 40px;
}
.v2-underline-wave {
  position: relative;
  color: var(--ink);
  font-weight: 700;
}
.v2-underline-wave::after {
  content: '';
  position: absolute; left: 0; right: 0; bottom: -6px;
  height: 6px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 6'><path d='M0 3 Q 10 0 20 3 T 40 3 T 60 3 T 80 3' stroke='%23ff2e63' stroke-width='2' fill='none'/></svg>") repeat-x;
  background-size: 80px 6px;
}
.v2-hero-ctas {
  display: flex; flex-wrap: wrap; gap: 14px;
}

/* Buttons */
.v2-btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700; letter-spacing: 0.02em;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(.16,1,.3,1), box-shadow 0.25s;
  border: none;
  font-family: inherit;
}
.v2-btn-primary {
  background: linear-gradient(120deg, var(--pink), var(--cyan));
  color: var(--bg);
  box-shadow: 0 8px 30px rgba(255,46,99,0.35);
}
.v2-btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 40px rgba(255,46,99,0.5), 0 0 30px rgba(0,240,255,0.3);
}
.v2-btn-ghost {
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--ink);
  background: transparent;
}
.v2-btn-ghost:hover {
  border-color: var(--yellow);
  color: var(--yellow);
  transform: translateY(-3px);
}
.v2-btn-big { font-size: 18px; padding: 18px 28px; }
.v2-btn-arrow { transition: transform 0.2s; }
.v2-btn:hover .v2-btn-arrow { transform: translateX(4px); }

/* Hero blobs */
.v2-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  z-index: -1;
  animation: v2float 14s ease-in-out infinite;
}
.v2-blob-1 {
  width: 480px; height: 480px;
  background: var(--pink);
  top: -120px; right: -80px;
}
.v2-blob-2 {
  width: 380px; height: 380px;
  background: var(--cyan);
  bottom: -120px; left: -100px;
  animation-delay: -4s;
}
.v2-blob-3 {
  width: 280px; height: 280px;
  background: var(--violet);
  top: 40%; right: 30%;
  animation-delay: -8s;
  opacity: 0.35;
}

/* Scroll hint */
.v2-scroll-hint {
  position: absolute;
  left: clamp(20px, 5vw, 56px);
  bottom: 32px;
  display: flex; align-items: center; gap: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.3em;
  color: var(--muted);
}
.v2-scroll-line {
  width: 60px; height: 1px; background: var(--muted);
  position: relative; overflow: hidden;
}
.v2-scroll-line::after {
  content: ''; position: absolute; inset: 0;
  background: var(--lime);
  animation: v2scrollLine 2s ease-in-out infinite;
}

/* Marquee */
.v2-marquee {
  position: relative; z-index: 2;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: var(--bg);
  overflow: hidden;
  padding: 24px 0;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: -0.02em;
}
.v2-marquee-accent {
  background: var(--pink);
  color: var(--bg);
  border-color: transparent;
}
.v2-marquee-track {
  display: inline-flex; white-space: nowrap;
  animation: v2marquee 38s linear infinite;
}
.v2-marquee-item {
  display: inline-flex; align-items: center; gap: 28px;
  padding: 0 28px;
}
.v2-marquee-star {
  color: var(--cyan);
  display: inline-block;
  animation: v2spin 8s linear infinite;
}
.v2-marquee-accent .v2-marquee-star { color: var(--bg); }

/* Manifesto */
.v2-manifesto {
  position: relative; z-index: 2;
  padding: clamp(80px, 12vw, 160px) clamp(20px, 5vw, 56px);
  background: linear-gradient(180deg, var(--bg), var(--surface));
}
.v2-manifesto-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.18em;
  color: var(--lime);
  margin-bottom: 32px;
}
.v2-manifesto-grid {
  display: flex; flex-direction: column; gap: 8px;
}
.v2-manifesto-row {
  display: flex; align-items: baseline;
  gap: clamp(16px, 4vw, 48px);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: clamp(36px, 6vw, 88px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 12px;
}
.v2-manifesto-a {
  color: var(--muted);
  font-weight: 400;
  font-style: italic;
  font-family: 'Caveat', cursive;
  font-size: 0.55em;
  white-space: nowrap;
}
.v2-manifesto-b {
  flex: 1;
  background: linear-gradient(120deg, var(--ink), var(--ink));
  background-clip: text; -webkit-background-clip: text;
  transition: background 0.4s;
}
.v2-manifesto-row:nth-child(1) .v2-manifesto-b { color: var(--yellow); }
.v2-manifesto-row:nth-child(2) .v2-manifesto-b { color: var(--cyan); }
.v2-manifesto-row:nth-child(3) .v2-manifesto-b { color: var(--lime); }
.v2-manifesto-row:nth-child(4) .v2-manifesto-b { color: var(--pink); }

/* Generic section */
.v2-section {
  position: relative; z-index: 2;
  padding: clamp(80px, 12vw, 140px) clamp(20px, 5vw, 56px);
}
.v2-heading {
  display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;
}
.v2-kicker {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.2em;
  color: var(--cyan);
}
.v2-h2 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: clamp(40px, 6vw, 88px);
  line-height: 1; letter-spacing: -0.03em;
  margin: 0;
}
.v2-section-intro {
  max-width: 720px;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.6;
  color: var(--muted);
  margin: 0 0 56px;
}

/* What I do — cards */
.v2-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.v2-card {
  position: relative;
  padding: 28px;
  border-radius: 24px;
  background: var(--surface);
  border: 1px solid rgba(255,255,255,0.06);
  transform: rotate(var(--rot, 0));
  transition: transform 0.35s cubic-bezier(.16,1,.3,1), border-color 0.3s;
  overflow: hidden;
}
.v2-card:hover {
  transform: rotate(0) translateY(-6px) scale(1.02);
  border-color: var(--accent);
}
.v2-card-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 18px;
}
.v2-card-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 24px; font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 12px;
}
.v2-card-body {
  font-size: 15px; line-height: 1.55;
  color: var(--muted);
  margin: 0;
}
.v2-card-glow {
  position: absolute;
  inset: auto -40% -40% auto;
  width: 160px; height: 160px;
  background: var(--accent);
  filter: blur(60px);
  opacity: 0;
  transition: opacity 0.4s;
}
.v2-card:hover .v2-card-glow { opacity: 0.45; }

/* Work */
.v2-projects {
  display: flex; flex-direction: column; gap: 16px;
}
.v2-project {
  padding: 32px;
  border-radius: 24px;
  background: var(--surface);
  border: 1px solid rgba(255,255,255,0.08);
  transition: transform 0.3s, background 0.3s, border-color 0.3s;
}
.v2-project:hover {
  background: var(--surface-2);
  border-color: var(--cyan);
  transform: translateX(8px);
}
.v2-project-meta {
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.18em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 12px;
}
.v2-project-id { color: var(--pink); }
.v2-project-name {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 24px;
}
.v2-project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}
@media (max-width: 640px) {
  .v2-project-grid { grid-template-columns: 1fr; }
}
.v2-project-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.2em;
  color: var(--pink);
  margin-bottom: 8px;
}
.v2-project-label-win { color: var(--lime); }
.v2-project-grid p { margin: 0; color: var(--ink); line-height: 1.55; font-size: 15px; }
.v2-tech { display: flex; flex-wrap: wrap; gap: 8px; }
.v2-tech-chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 6px 12px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px;
  color: var(--muted);
}

/* Edge */
.v2-edge { background: linear-gradient(180deg, var(--bg), #050510); }
.v2-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.v2-pillar {
  padding: 28px;
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid rgba(255,255,255,0.06);
  transition: transform 0.3s;
}
.v2-pillar:hover { transform: translateY(-6px) rotate(-1deg); }
.v2-pillar-icon {
  font-size: 36px; margin-bottom: 16px;
  display: inline-block;
  animation: v2bounce 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.3s);
}
.v2-pillar-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 20px; font-weight: 700;
  margin: 0 0 10px;
}
.v2-pillar-body {
  font-size: 14px; line-height: 1.6;
  color: var(--muted); margin: 0;
}

/* Steps */
.v2-steps {
  display: flex; flex-direction: column; gap: 4px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.v2-step {
  display: grid;
  grid-template-columns: 80px 1fr 8px;
  gap: 24px;
  align-items: center;
  padding: 28px 8px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
  transition: background 0.3s, padding 0.3s;
  position: relative;
}
.v2-step:hover, .v2-step.is-active {
  background: linear-gradient(90deg, rgba(255,46,99,0.06), transparent 70%);
  padding-left: 20px;
}
.v2-step-num {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 32px; font-weight: 800;
  color: var(--muted);
  transition: color 0.3s;
}
.v2-step.is-active .v2-step-num { color: var(--pink); }
.v2-step-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(22px, 2.8vw, 32px);
  font-weight: 700;
  margin: 0 0 6px;
  letter-spacing: -0.01em;
}
.v2-step-body {
  font-size: 15px; line-height: 1.55;
  color: var(--muted);
  margin: 0;
  max-height: 0; opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
}
.v2-step.is-active .v2-step-body {
  max-height: 200px; opacity: 1;
}
.v2-step-bar {
  width: 4px; height: 0; border-radius: 2px;
  background: linear-gradient(180deg, var(--pink), var(--cyan));
  transition: height 0.3s;
}
.v2-step.is-active .v2-step-bar { height: 60px; }

/* Contact */
.v2-contact {
  position: relative; z-index: 2;
  padding: clamp(100px, 14vw, 180px) clamp(20px, 5vw, 56px);
  text-align: center;
  overflow: hidden;
}
.v2-contact-blob {
  position: absolute;
  inset: auto 0 -200px 50%;
  transform: translateX(-50%);
  width: 800px; height: 800px; max-width: 100%;
  background: radial-gradient(circle, var(--pink), transparent 60%);
  opacity: 0.35;
  filter: blur(60px);
  z-index: -1;
  animation: v2float 12s ease-in-out infinite;
}
.v2-contact-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.18em;
  color: var(--cyan);
  margin-bottom: 24px;
}
.v2-contact-heading {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: clamp(40px, 7vw, 96px);
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0 0 24px;
}
.v2-contact-flash {
  display: inline-block;
  background: linear-gradient(120deg, var(--yellow), var(--pink), var(--cyan));
  background-size: 200% 200%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
  animation: v2gradient 3s ease infinite;
}
.v2-contact-intro {
  max-width: 640px; margin: 0 auto 12px;
  font-size: clamp(16px, 1.4vw, 19px);
  line-height: 1.55; color: var(--muted);
}
.v2-contact-cta {
  font-family: 'Caveat', cursive;
  font-size: clamp(20px, 2vw, 26px);
  color: var(--lime);
  margin: 0 0 36px;
}
.v2-contact-actions {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 14px;
  margin-bottom: 24px;
}
.v2-contact-loc {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.15em;
  color: var(--muted);
}

/* Footer */
.v2-footer {
  position: relative; z-index: 2;
  padding: 32px clamp(20px, 5vw, 56px);
  display: flex; flex-wrap: wrap; gap: 16px;
  justify-content: space-between; align-items: center;
  border-top: 1px solid rgba(255,255,255,0.08);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--muted);
}
.v2-footer-name { color: var(--ink); font-weight: 700; }
.v2-footer-tag { margin-top: 4px; }

/* ── Animations ─────────────────────────────────────────────────────────── */
@keyframes v2pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
}
@keyframes v2float {
  0%, 100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.05); }
  66% { transform: translate(-30px, 20px) scale(0.95); }
}
@keyframes v2gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes v2spin {
  to { transform: rotate(360deg); }
}
@keyframes v2riseIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes v2marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-33.333%); }
}
@keyframes v2bounce {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-8px) rotate(6deg); }
}
@keyframes v2scrollLine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .v2-root *,
  .v2-root *::before,
  .v2-root *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
    `}</style>
  );
}
