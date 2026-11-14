import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Experiences", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-3xl dark:border-slate-800/80 dark:bg-[#080d1a]">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <a
          href="/Talha-Ahmad--Full-Stack-Development--CV.pdf"
          download="Talha-Ahmad--Full-Stack-Development--CV.pdf"
          aria-label="Download my resume"
          title="Download my resume"
          className="text-lg font-semibold tracking-tight text-slate-950 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 dark:text-white dark:focus-visible:ring-offset-slate-950"
        >
          TA<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
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

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile Navigation Dropdown */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full border-b border-slate-200/80 bg-white/95 px-6 shadow-lg shadow-slate-900/5 backdrop-blur-3xl transition-all duration-300 md:hidden dark:border-slate-800 dark:bg-[#080d1a]/95 ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col py-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
