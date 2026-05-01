import { work } from "../content/siteContent";

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-start gap-8 mb-20 pb-12 border-b border-ink/10">
          <span className="font-mono-custom text-xs text-accent tracking-widest-xl uppercase mt-1 shrink-0">
            Work
          </span>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-tight text-ink mb-6">
              {work.heading}
            </h2>
            <p className="text-ink/50 text-lg leading-relaxed max-w-2xl font-light">
              {work.intro}
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {work.projects.map((project) => (
            <article
              key={project.id}
              className="project-card group border border-ink/10 bg-paper hover:border-accent/30 transition-colors duration-300"
            >
              {/* Screenshot area */}
              <div className="aspect-video screenshot-placeholder border-b border-ink/10 relative overflow-hidden">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={project.screenshotAlt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-mono-custom text-xs text-ink/30 mb-2">
                        screenshot
                      </div>
                      <div className="w-8 h-px bg-ink/20 mx-auto" />
                    </div>
                  </div>
                )}
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono-custom text-xs bg-paper/90 backdrop-blur-sm px-3 py-1.5 text-ink/60 border border-ink/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ink mb-6 leading-snug">
                  {project.name}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="font-mono-custom text-xs text-accent/70 uppercase tracking-widest mb-1.5">
                      Problem
                    </div>
                    <p className="text-ink/60 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="font-mono-custom text-xs text-accent/70 uppercase tracking-widest mb-1.5">
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
                      className="font-mono-custom text-xs px-2.5 py-1 bg-paper-dark text-ink/50"
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
        <p className="mt-12 text-center font-mono-custom text-xs text-ink/30">
          To add screenshots: place images in{" "}
          <code className="bg-paper-dark px-2 py-0.5">src/assets/screenshots/</code>{" "}
          and update <code className="bg-paper-dark px-2 py-0.5">src/content/siteContent.ts</code>
        </p>
      </div>
    </section>
  );
}
