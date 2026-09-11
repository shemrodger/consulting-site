import { myEdge } from "../content/siteContent";

const cardStyles = [
  "bg-cobalt text-paper",
  "bg-paper text-ink",
  "bg-paper text-ink",
  "bg-accent text-paper",
];

export default function MyEdge() {
  return (
    <section id="my-edge" className="py-6 md:py-8 px-4 md:px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="bento-card bg-ink-soft flex flex-col md:flex-row md:items-end justify-between gap-6 p-8 md:p-10 mb-4 md:mb-5">
          <div>
            <span className="font-label text-xs text-accent tracking-widest-xl uppercase">
              Positioning
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] text-paper mt-4">
              {myEdge.heading}
            </h2>
          </div>
          <p className="text-paper/50 text-base leading-relaxed max-w-md font-light">
            {myEdge.intro}
          </p>
        </div>

        {/* Pillars — bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {myEdge.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`bento-card bento-card--hover p-8 md:p-10 ${cardStyles[i % cardStyles.length]}`}
            >
              <div className="text-3xl mb-6">{pillar.icon}</div>
              <h3 className="font-display text-xl font-bold mb-4 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-base leading-relaxed font-light opacity-75">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="bento-card bg-paper mt-4 md:mt-5 p-10 md:p-16 text-center">
          <div className="font-display text-2xl md:text-4xl font-bold text-ink leading-relaxed max-w-3xl mx-auto">
            "The constraint is never where you think it is. That's why the first step is always diagnosis — not delivery."
          </div>
          <div className="mt-6 w-10 h-1 rounded-full bg-accent mx-auto" />
        </div>
      </div>
    </section>
  );
}
