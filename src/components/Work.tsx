import { work } from "../content/siteContent";

export default function Work() {
  return (
    <section id="work" className="py-6 md:py-8 px-4 md:px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="bento-card bg-ink flex flex-col md:flex-row md:items-end justify-between gap-6 p-8 md:p-10 mb-4 md:mb-5">
          <div>
            <span className="font-label text-xs text-accent tracking-widest-xl uppercase">
              Work
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] text-paper mt-4">
              {work.heading}
            </h2>
          </div>
          <p className="text-paper/50 text-base leading-relaxed max-w-md font-light">
            {work.intro}
          </p>
        </div>

        {/* Projects grid — laptop-mockup style cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {work.projects.map((project) => (
            <article
              key={project.id}
              className="project-card bento-card bg-paper-dark overflow-hidden"
            >
              {/* Browser chrome bar */}
              <div className="chrome-bar bg-ink justify-between">
                <div className="flex items-center gap-2">
                  <span className="chrome-dot bg-accent" />
                  <span className="chrome-dot bg-cobalt" />
                  <span className="chrome-dot bg-paper/20" />
                </div>
                <span className="font-label text-xs text-paper/40 pr-2">
                  {project.category}
                </span>
              </div>

              {/* Screenshot area */}
              <div className="aspect-video screenshot-placeholder relative overflow-hidden">
                {project.screenshot ? (
                  project.screenshot.endsWith(".mp4") ? (
                    <video
                      src={project.screenshot}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.screenshot}
                      alt={project.screenshotAlt}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-label text-xs text-ink/30 mb-2">
                        screenshot
                      </div>
                      <div className="w-8 h-px bg-ink/20 mx-auto" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 bg-paper">
                <h3 className="font-display text-2xl font-extrabold text-ink mb-6 leading-snug">
                  {project.name}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="font-label text-xs text-accent uppercase tracking-widest mb-1.5">
                      Problem
                    </div>
                    <p className="text-ink/60 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="font-label text-xs text-cobalt uppercase tracking-widest mb-1.5">
                      Outcome
                    </div>
                    <p className="text-ink/80 text-sm leading-relaxed font-medium">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-ink/10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-label text-xs px-3 py-1.5 rounded-full bg-paper-dark text-ink/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Add screenshot instructions hint */}
        <p className="mt-8 text-center font-label text-xs text-ink/30">
          To add screenshots: place images in{" "}
          <code className="bg-paper-dark px-2 py-0.5 rounded">src/assets/screenshots/</code>{" "}
          and update <code className="bg-paper-dark px-2 py-0.5 rounded">src/content/siteContent.ts</code>
        </p>
      </div>
    </section>
  );
}
