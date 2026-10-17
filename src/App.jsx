import { Routes, Route, Link } from "react-router-dom";
import profileImage from "./assets/profile-pic.png";

function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 lg:px-12 lg:gap-16"
      >
        {/* Left: Introduction */}
        <div className="order-2 max-w-3xl md:order-1">
          <p className="mb-5 flex items-center gap-3 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            <span className="h-px w-8 bg-emerald-500" />
            Talha Ahmad
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
            Building thoughtful
            <span className="block text-slate-500 dark:text-slate-400">
              digital experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            I'm a full-stack developer who enjoys turning ideas into accessible,
            responsive, and user-friendly small to enterprise web solutions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Focused on learning, building, and improving.
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-emerald-500/30 sm:-right-4 sm:-top-4"
            />

            {/* Profile photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
              <img
                src={profileImage}
                alt="Portrait of Talha Ahmad"
                className="h-full w-full object-cover object-center"
                width="800"
                height="1000"
                fetchPriority="high"
              />
            </div>

            {/* Subtle accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-16 w-16 rounded-2xl border border-emerald-500/30 sm:-bottom-4 sm:-left-4"
            />
          </div>
        </div>
      </section>

      {/* Placeholder section anchors for navigation */}
      <section
        id="projects"
        className="border-t border-slate-200 dark:border-slate-800"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            SELECTED WORK
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Projects worth exploring.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            We'll build the project showcase in a later step.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-slate-200 dark:border-slate-800"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Let's connect.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            We'll add your contact details and form later.
          </p>
        </div>
      </section>
    </main>
  );
}

function Navbar() {
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
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white"
        >
          TA<span className="text-emerald-500">.</span>
        </Link>

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

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <footer className="border-t border-slate-200 px-6 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} Talha Ahmad. Built with React.js.
      </footer>
    </div>
  );
}

export default App;
