import { whatIDo } from "../content/siteContent";

const cardStyles = [
  "bg-paper text-ink",
  "bg-ink-soft text-paper",
  "bg-paper text-ink",
  "bg-cobalt text-paper",
  "bg-paper text-ink",
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-6 md:py-8 px-4 md:px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="bento-card bg-ink-soft flex flex-col md:flex-row md:items-end justify-between gap-6 p-8 md:p-10 mb-4 md:mb-5">
          <div>
            <span className="font-label text-xs text-accent tracking-widest-xl uppercase">
              Services
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] text-paper mt-4">
              {whatIDo.heading}
            </h2>
          </div>
          <p className="text-paper/50 text-base leading-relaxed max-w-md font-light">
            {whatIDo.intro}
          </p>
        </div>

        {/* Services bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {whatIDo.services.map((service, i) => (
            <div
              key={service.number}
              className={`bento-card bento-card--hover p-8 md:p-10 flex flex-col ${cardStyles[i % cardStyles.length]} ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-label text-sm opacity-50">
                  {service.number}
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold leading-snug mb-4">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed font-light opacity-70">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
