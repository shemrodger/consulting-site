import { myEdge } from "../content/siteContent";

export default function MyEdge() {
  return (
    <section id="my-edge" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-paper-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-start gap-8 mb-10 pb-8 md:mb-16 md:pb-10 lg:mb-20 lg:pb-12 border-b border-ink/10">
          <span className="font-mono-custom text-xs text-accent tracking-widest-xl uppercase mt-1 shrink-0">
            Positioning
          </span>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-tight text-ink mb-6">
              {myEdge.heading}
            </h2>
            <p className="text-ink/50 text-lg leading-relaxed max-w-2xl font-light">
              {myEdge.intro}
            </p>
          </div>
        </div>

        {/* Pillars — editorial layout */}
        <div className="grid md:grid-cols-2 gap-0 border-l border-ink/10">
          {myEdge.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`p-10 border-b border-r border-ink/10 group hover:bg-paper transition-colors duration-300 ${
                i % 2 === 0 ? "" : ""
              }`}
            >
              <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                {pillar.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-4 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-ink/55 text-base leading-relaxed font-light">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-10 md:mt-16 lg:mt-20 max-w-3xl mx-auto text-center">
          <div className="font-display text-2xl md:text-3xl italic font-normal text-ink/70 leading-relaxed">
            "The constraint is never where you think it is. That's why the first step is always diagnosis — not delivery."
          </div>
          <div className="mt-6 w-8 h-px bg-accent mx-auto" />
        </div>
      </div>
    </section>
  );
}
