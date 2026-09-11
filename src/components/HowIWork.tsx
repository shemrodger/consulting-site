import { howIWork } from "../content/siteContent";

export default function HowIWork() {
  return (
    <section id="process" className="py-6 md:py-8 px-4 md:px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="bento-card bg-ink flex flex-col md:flex-row md:items-end justify-between gap-6 p-8 md:p-10 mb-4 md:mb-5">
          <div>
            <span className="font-label text-xs text-accent tracking-widest-xl uppercase">
              Process
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] text-paper mt-4">
              {howIWork.heading}
            </h2>
          </div>
          <p className="text-paper/50 text-base leading-relaxed max-w-md font-light">
            {howIWork.intro}
          </p>
        </div>

        {/* Steps — bento row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {howIWork.steps.map((step, i) => (
            <div
              key={step.number}
              className={`bento-card bento-card--hover p-7 md:p-8 flex flex-col ${
                i === howIWork.steps.length - 1 ? "bg-cobalt text-paper" : "bg-ink-soft text-paper"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-paper/10 flex items-center justify-center">
                  <span className="font-label text-xs">{step.number}</span>
                </div>
              </div>

              <h3 className="font-display text-lg font-bold leading-snug mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed font-light opacity-65">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* ToC note */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-5">
          <div className="bento-card bg-paper-dark p-8 md:p-10 md:col-span-2">
            <div className="font-label text-xs text-accent uppercase tracking-widest mb-3">
              Methodology
            </div>
            <p className="text-ink/60 text-base leading-relaxed font-light">
              This process is grounded in Theory of Constraints — the idea that every system has exactly one constraint limiting its throughput. Anything not addressing that constraint is wasted effort. The goal is to find it fast, fix it, then find the next one.
            </p>
          </div>
          <div className="bento-card bg-ink p-8 md:p-10">
            <div className="font-label text-xs text-accent uppercase tracking-widest mb-4">
              Not this engagement type:
            </div>
            <ul className="space-y-2.5">
              {[
                "6-month strategy reports",
                "Vendor selection spreadsheets",
                "Readiness assessments that go nowhere",
                "Decks written for a boardroom",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-paper/45 font-light">
                  <span className="text-paper/25 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
