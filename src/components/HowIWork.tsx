import { howIWork } from "../content/siteContent";

export default function HowIWork() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-start gap-8 mb-20 pb-12 border-b border-paper/10">
          <span className="font-mono-custom text-xs text-accent tracking-widest-xl uppercase mt-1 shrink-0">
            Process
          </span>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-tight text-paper mb-6">
              {howIWork.heading}
            </h2>
            <p className="text-paper/45 text-lg leading-relaxed max-w-2xl font-light">
              {howIWork.intro}
            </p>
          </div>
        </div>

        {/* Steps — horizontal flow on desktop */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(2.5rem+1px)] right-0 h-px bg-paper/10" aria-hidden />

          <div className="grid md:grid-cols-5 gap-0 md:gap-0">
            {howIWork.steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative group py-8 md:py-0 ${
                  i > 0 ? "border-t md:border-t-0 md:border-l border-paper/10" : ""
                }`}
              >
                <div className="md:px-8 md:pt-16">
                  {/* Number with accent dot */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full border border-paper/30 flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-paper/30 group-hover:bg-accent transition-colors duration-300" />
                      </div>
                    </div>
                    <span className="font-mono-custom text-xs text-accent/60 group-hover:text-accent transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-paper leading-snug mb-4">
                    {step.title}
                  </h3>
                  <p className="text-paper/45 text-sm leading-relaxed font-light">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ToC note */}
        <div className="mt-20 pt-12 border-t border-paper/10 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="font-mono-custom text-xs text-accent/50 uppercase tracking-widest mb-3">
              Methodology
            </div>
            <p className="text-paper/40 text-base leading-relaxed font-light">
              This process is grounded in Theory of Constraints — the idea that every system has exactly one constraint limiting its throughput. Anything not addressing that constraint is wasted effort. The goal is to find it fast, fix it, then find the next one.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="border border-paper/10 p-6">
              <div className="font-mono-custom text-xs text-accent/50 uppercase tracking-widest mb-4">
                Not this engagement type:
              </div>
              <ul className="space-y-2">
                {[
                  "6-month strategy reports",
                  "Vendor selection spreadsheets",
                  "Readiness assessments that go nowhere",
                  "Decks written for a boardroom",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-paper/30 font-light">
                    <span className="text-paper/20 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
