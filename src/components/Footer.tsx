import { footer, contact } from "../content/siteContent";

export default function Footer() {
  return (
    <footer className="pt-2 pb-6 md:pb-8 px-4 md:px-6 bg-ink">
      <div className="max-w-7xl mx-auto bento-card bg-ink-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8">
        <div>
          <div className="font-display text-lg font-extrabold text-paper mb-1">
            {footer.name}
          </div>
          <div className="font-label text-xs text-paper/35">
            {footer.tagline}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="font-label text-xs text-paper/45 hover:text-paper/75 transition-colors"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs text-paper/45 hover:text-paper/75 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={contact.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs text-paper/45 hover:text-paper/75 transition-colors"
          >
            Substack
          </a>
          <div className="font-label text-xs text-paper/25">
            © {footer.year}
          </div>
        </div>
      </div>
    </footer>
  );
}
