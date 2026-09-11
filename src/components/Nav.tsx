import { useState, useEffect } from "react";
import { meta } from "../content/siteContent";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "What I do", href: "#what-i-do" },
    { label: "Work", href: "#work" },
    { label: "My edge", href: "#my-edge" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      <nav
        className={`max-w-7xl mx-auto h-16 flex items-center justify-between rounded-full px-5 md:px-6 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md shadow-[0_12px_32px_rgba(20,19,16,0.18)]"
            : "bg-ink"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-lg font-extrabold text-paper tracking-tight"
        >
          {meta.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-label text-paper/65 hover:text-paper transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 text-sm rounded-full bg-cobalt text-paper font-label font-medium hover:bg-cobalt-light transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-paper transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 max-w-7xl mx-auto ${
          menuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        } bg-ink rounded-3xl`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-paper/70 hover:text-paper transition-colors py-1 font-label"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 text-sm rounded-full bg-cobalt text-paper font-label font-medium text-center"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
