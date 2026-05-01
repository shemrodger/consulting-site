import { footer, contact } from "../content/siteContent";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-ink text-paper border-t border-paper/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-lg font-semibold text-paper mb-1">
            {footer.name}
          </div>
          <div className="font-mono-custom text-xs text-paper/30">
            {footer.tagline}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="font-mono-custom text-xs text-paper/40 hover:text-paper/70 transition-colors"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-custom text-xs text-paper/40 hover:text-paper/70 transition-colors"
          >
            LinkedIn
          </a>
          <div className="font-mono-custom text-xs text-paper/20">
            © {footer.year}
          </div>
        </div>
      </div>
    </footer>
  );
}
