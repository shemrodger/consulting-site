import { hero } from "../content/siteContent";

export default function Hero() {
  const lines = hero.headline.split("\n");
  const stats = [
    { value: "10+", label: "Years in high-performance systems" },
    { value: "NZ", label: "Based — available globally" },
    { value: "ToC", label: "Constraint-first methodology" },
  ];

  return (
    <section className="relative pt-28 pb-6 md:pt-32 md:pb-8 px-4 md:px-6 bg-ink">
      <div className="hero-grid relative max-w-7xl mx-auto flex flex-col gap-4 md:grid md:grid-cols-[1.05fr_1.4fr] md:gap-5 animate-fade-in opacity-0">

        {/* Eyebrow card */}
        <div
          className="bento-card bg-paper p-8 md:p-9 flex flex-col justify-between min-h-[180px] animate-fade-up opacity-0 delay-100"
          style={{ gridArea: "eyebrow" }}
        >
          <span className="font-label text-xs text-accent tracking-widest-xl uppercase">
            {hero.eyebrow}
          </span>
          <div className="flex items-center gap-2 mt-6">
            <div className="w-2.5 h-2.5 rounded-full bg-cobalt" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink/20" />
          </div>
        </div>

        {/* Headline card — the dominant tile */}
        <div
          className="bento-card bg-cobalt p-8 md:p-14 flex items-center animate-fade-up opacity-0 delay-200"
          style={{ gridArea: "headline" }}
        >
          <h1 className="font-display text-[clamp(2.25rem,5.2vw,4.75rem)] leading-[1.02] font-extrabold text-paper tracking-tight">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>

        {/* Browser-mockup card — subheadline + CTAs */}
        <div
          className="bento-card bg-paper overflow-hidden flex flex-col animate-fade-up opacity-0 delay-300"
          style={{ gridArea: "mock" }}
        >
          <div className="chrome-bar bg-paper-dark">
            <span className="chrome-dot bg-accent" />
            <span className="chrome-dot bg-cobalt" />
            <span className="chrome-dot bg-ink/20" />
          </div>
          <div className="p-8 md:p-9 flex-1 flex flex-col justify-between gap-8">
            <p className="text-ink/65 text-base leading-relaxed font-light">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={hero.ctaPrimary.href}
                className="px-6 py-3.5 rounded-full bg-ink text-paper text-sm font-label font-medium hover:bg-accent transition-colors duration-300 whitespace-nowrap text-center"
              >
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="px-6 py-3.5 rounded-full border border-ink/20 text-ink text-sm font-label font-medium hover:border-cobalt hover:text-cobalt transition-colors duration-300 whitespace-nowrap text-center"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="bento-card bg-ink-soft grid grid-cols-3 divide-x divide-paper/10 animate-fade-up opacity-0 delay-400"
          style={{ gridArea: "stats" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-7 md:px-10 md:py-8">
              <div className="font-display text-2xl md:text-3xl font-extrabold text-paper">
                {stat.value}
              </div>
              <div className="text-xs text-paper/40 mt-1.5 font-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-areas: "eyebrow headline" "mock headline" "stats stats";
          }
        }
      `}</style>
    </section>
  );
}
