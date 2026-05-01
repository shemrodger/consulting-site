import { hero } from "../content/siteContent";

export default function Hero() {
  const lines = hero.headline.split("\n");

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 pt-32 px-6 md:px-12 overflow-hidden bg-paper">
      {/* Background architectural lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Vertical rule — far right */}
        <div className="absolute top-0 right-[12%] bottom-0 w-px bg-ink/6" />
        {/* Horizontal rule — upper */}
        <div className="absolute top-[38%] left-0 right-0 h-px bg-ink/6" />
        {/* Corner accent mark */}
        <div className="absolute top-20 right-[12%] w-12 h-px bg-accent animate-line opacity-0 delay-700" />
        <div className="absolute top-20 right-[12%] w-px h-12 bg-accent" style={{ transformOrigin: 'top', animation: 'lineGrow 1.2s 0.7s cubic-bezier(0.16,1,0.3,1) forwards', transform: 'scaleY(0)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12 animate-fade-in opacity-0 delay-100">
          <span className="font-mono-custom text-xs text-accent tracking-widest-xl uppercase">
            {hero.eyebrow}
          </span>
          <div className="w-16 h-px bg-accent" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] font-semibold text-ink mb-10 tracking-tight">
          {lines.map((line, i) => (
            <span
              key={i}
              className={`block animate-fade-up opacity-0 ${
                i === 0 ? "delay-200" : i === 1 ? "delay-300" : "delay-400"
              }`}
            >
              {i === 1 ? (
                <em className="italic font-normal">{line}</em>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        {/* Subheadline + CTAs */}
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <p className="text-ink/60 text-lg leading-relaxed font-light max-w-md animate-fade-up opacity-0 delay-500">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 animate-fade-up opacity-0 delay-600">
            <a
              href={hero.ctaPrimary.href}
              className="px-8 py-4 bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors duration-300 whitespace-nowrap"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="px-8 py-4 border border-ink/30 text-ink text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300 whitespace-nowrap"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Bottom rule with stat hints */}
        <div className="mt-20 pt-8 border-t border-ink/10 grid grid-cols-3 gap-8 animate-fade-up opacity-0 delay-700">
          {[
            { value: "10+", label: "Years in high-performance systems" },
            { value: "NZ", label: "Based — available globally" },
            { value: "ToC", label: "Constraint-first methodology" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display text-2xl font-semibold text-ink">
                {stat.value}
              </div>
              <div className="text-xs text-ink/40 mt-1 font-mono-custom">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-700">
        <div className="w-px h-12 bg-ink/20 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-accent"
            style={{
              animation: 'scrollLine 2s 1.5s cubic-bezier(0.16,1,0.3,1) infinite',
              height: '40%',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(350%); }
        }
      `}</style>
    </section>
  );
}
