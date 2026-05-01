import { contact } from "../content/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono-custom text-xs text-accent tracking-widest-xl uppercase">
                Contact
              </span>
              <div className="w-8 h-px bg-accent" />
            </div>

            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-tight text-ink mb-8">
              {contact.heading}
            </h2>

            <p className="text-ink/55 text-lg leading-relaxed font-light mb-6 max-w-md">
              {contact.intro}
            </p>

            <p className="text-ink/40 text-base italic font-display">
              {contact.cta}
            </p>

            {/* Location */}
            <div className="mt-12 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono-custom text-xs text-ink/40">
                {contact.location}
              </span>
            </div>
          </div>

          {/* Right — contact links */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between p-8 border border-ink/10 hover:border-accent/40 bg-paper hover:bg-paper-dark transition-all duration-300"
            >
              <div>
                <div className="font-mono-custom text-xs text-ink/35 uppercase tracking-widest mb-2">
                  Email
                </div>
                <div className="font-display text-xl text-ink group-hover:text-accent transition-colors duration-300">
                  {contact.email}
                </div>
              </div>
              <div className="text-ink/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                →
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-8 border border-ink/10 hover:border-accent/40 bg-paper hover:bg-paper-dark transition-all duration-300"
            >
              <div>
                <div className="font-mono-custom text-xs text-ink/35 uppercase tracking-widest mb-2">
                  LinkedIn
                </div>
                <div className="font-display text-xl text-ink group-hover:text-accent transition-colors duration-300">
                  View profile
                </div>
              </div>
              <div className="text-ink/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                ↗
              </div>
            </a>

            {/* Divider note */}
            <div className="pt-4 pl-8">
              <p className="font-mono-custom text-xs text-ink/30 leading-relaxed">
                I respond to every message personally.
                <br />
                If your problem is real, so is the conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
