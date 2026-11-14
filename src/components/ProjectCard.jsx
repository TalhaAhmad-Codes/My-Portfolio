import ScrollReveal from "./ScrollReveal";

export function ProjectCard({
  title,
  description,
  skills = [],
  githubUrl,
  liveUrl,
  delay = 0,
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-2xl border border-[#e2e8df] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:shadow-black/20 sm:p-7">
        {/* Subtle decorative accent */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-500/70 via-indigo-500/70 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
        />

        <div className="flex h-full flex-col">
          {/* Project title */}
          <h3 className="text-lg font-semibold tracking-tight text-slate-950 transition-colors duration-200 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400 sm:text-xl">
            {title}
          </h3>

          {/* Project description */}
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {description}
          </p>

          {/* Technology badges */}
          {skills.length > 0 && (
            <ul
              aria-label={`Technologies used in ${title}`}
              className="mt-6 flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[#dce5da] bg-[#f0f5ef] px-3 py-1 text-xs font-medium text-[#526357] transition-colors duration-200 group-hover:border-emerald-200 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:group-hover:border-slate-600"
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}

          {/* Project links */}
          {(githubUrl || liveUrl) && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* GitHub link */}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code on GitHub`}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.31-3.75-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  GitHub
                </a>
              )}

              {/* Live project link */}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} live website`}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:focus-visible:ring-offset-slate-900"
                >
                  Go live
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
}
