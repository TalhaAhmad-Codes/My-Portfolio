import ScrollReveal from "./ScrollReveal";

export function ProjectCard({ title, description, skills = [], delay = 0 }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-2xl border border-[#e2e8df] bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:shadow-black/20 sm:p-7">
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
        </div>
      </article>
    </ScrollReveal>
  );
}
