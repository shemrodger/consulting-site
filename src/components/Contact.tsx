import { contact } from "../content/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="py-6 md:py-8 px-4 md:px-6 bg-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-5">
        {/* Left — copy card */}
        <div className="bento-card bg-cobalt p-10 md:p-14 flex flex-col justify-between">
          <div>
            <span className="font-label text-xs text-paper/70 tracking-widest-xl uppercase">
              Contact
            </span>

            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] text-paper mt-6 mb-8">
              {contact.heading}
            </h2>

            <p className="text-paper/75 text-lg leading-relaxed font-light mb-6 max-w-md">
              {contact.intro}
            </p>

            <p className="text-paper/60 text-base italic font-display">
              {contact.cta}
            </p>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-label text-xs text-paper/60">
              {contact.location}
            </span>
          </div>
        </div>

        {/* Right — contact links */}
        <div className="flex flex-col gap-4 md:gap-5">
          <a
            href={`mailto:${contact.email}`}
            className="bento-card bento-card--hover group flex items-center justify-between p-8 bg-paper hover:bg-paper-dark transition-colors duration-300"
          >
            <div>
              <div className="font-label text-xs text-ink/40 uppercase tracking-widest mb-2">
                Email
              </div>
              <div className="font-display text-xl font-bold text-ink group-hover:text-accent transition-colors duration-300">
                {contact.email}
              </div>
            </div>
            <div className="text-ink/25 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-xl">
              →
            </div>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card bento-card--hover group flex items-center justify-between p-8 bg-paper hover:bg-paper-dark transition-colors duration-300"
          >
            <div>
              <div className="font-label text-xs text-ink/40 uppercase tracking-widest mb-2">
                LinkedIn
              </div>
              <div className="font-display text-xl font-bold text-ink group-hover:text-accent transition-colors duration-300">
                View profile
              </div>
            </div>
            <div className="text-ink/25 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-xl">
              ↗
            </div>
          </a>

          <a
            href={contact.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card bento-card--hover group flex items-center justify-between p-8 bg-paper hover:bg-paper-dark transition-colors duration-300"
          >
            <div>
              <div className="font-label text-xs text-ink/40 uppercase tracking-widest mb-2">
                Substack
              </div>
              <div className="font-display text-xl font-bold text-ink group-hover:text-accent transition-colors duration-300">
                Read the newsletter
              </div>
            </div>
            <div className="text-ink/25 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-xl">
              ↗
            </div>
          </a>

          <div className="bento-card bg-ink-soft p-8 flex-1 flex items-center">
            <p className="font-label text-xs text-paper/40 leading-relaxed">
              I respond to every message personally.
              <br />
              If your problem is real, so is the conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
