import { whatIDo } from "../content/siteContent";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-32 px-6 md:px-12 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-start gap-8 mb-20 pb-12 border-b border-paper/10">
          <span className="font-mono-custom text-xs text-accent tracking-widest-xl uppercase mt-1 shrink-0">
            Services
          </span>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-tight text-paper mb-6">
              {whatIDo.heading}
            </h2>
            <p className="text-paper/50 text-lg leading-relaxed max-w-2xl font-light">
              {whatIDo.intro}
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="space-y-0">
          {whatIDo.services.map((service, i) => (
            <div
              key={service.number}
              className={`group grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 py-10 border-b border-paper/10 hover:bg-paper/3 transition-colors duration-300 ${
                i === 0 ? "border-t border-paper/10" : ""
              }`}
            >
              {/* Number */}
              <div className="font-mono-custom text-sm text-accent/60 group-hover:text-accent transition-colors duration-300 pt-1">
                {service.number}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper leading-snug">
                {service.title}
              </h3>

              {/* Body */}
              <p className="text-paper/50 text-base leading-relaxed font-light">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
