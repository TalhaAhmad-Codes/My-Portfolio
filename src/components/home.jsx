import profileImage from "../assets/profile-pic.png";
import ScrollReveal from "./ScrollReveal";
import SkillsMarquee from "./SkillsMarquee";

export function Home() {
  return (
    <main>
      {/* Hero-Section */}
      <section
        id="home"
        className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 lg:px-12 lg:gap-16"
      >
        {/* Left: Introduction */}
        <div className="order-2 max-w-3xl md:order-1">
          {/* Name */}
          <p
            className="animate-fade-up mb-5 flex items-center gap-3 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-px w-8 bg-emerald-500" />
            Talha Ahmad
          </p>

          {/* Heading */}
          <h1
            className="animate-fade-up text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white"
            style={{ animationDelay: "220ms" }}
          >
            Building thoughtful
            <span className="block text-slate-500 dark:text-slate-400">
              digital experiences.
            </span>
          </h1>

          {/* Introduction */}
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400"
            style={{ animationDelay: "340ms" }}
          >
            I'm a full-stack developer who enjoys turning ideas into accessible,
            responsive, and user-friendly small to enterprise web solutions.
          </p>

          {/* CTA - Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-slate-700 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Get in touch
            </a>
          </div>

          {/* Status */}
          <div
            className="animate-fade-in mt-10 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400"
            style={{ animationDelay: "400ms" }}
          >
            {/* Point */}
            <span className="hover:bg-emerald-500 hover:rounded-sm relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Focused on learning, building, and improving.
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="animate-image-reveal relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
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

      {/* Moving technology logos */}
      <ScrollReveal delay={75} >
      <SkillsMarquee />
      </ScrollReveal>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-slate-200 dark:border-slate-800"
      >
        <ScrollReveal
          className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12"
          delay={100}
        >
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            SELECTED WORK
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Projects worth exploring.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            We'll build the project showcase in a later step.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact - Section */}
      <section
        id="contact"
        className="border-t border-slate-200 dark:border-slate-800"
      >
        <ScrollReveal
          className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12"
          delay={100}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Let's connect.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            We'll add your contact details and form later.
          </p>
        </ScrollReveal>
      </section>
    </main>
  );
}
