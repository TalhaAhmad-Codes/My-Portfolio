import { Link } from "react-router-dom";

export function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Experiences", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-lg dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="/Talha-Ahmad--Full-Stack-Development--CV.pdf"
          download="Talha-Ahmad--Full-Stack-Development--CV.pdf"
          aria-label="Download my resume"
          title="Download my resume"
          className="text-lg font-semibold tracking-tight text-slate-950 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 dark:text-white dark:focus-visible:ring-offset-slate-950"
        >
          TA<span className="text-emerald-500">.</span>
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
