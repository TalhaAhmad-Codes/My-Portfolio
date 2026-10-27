import ScrollReveal from "./ScrollReveal.jsx";

export default function ExperienceCard({
  company,
  duration,
  type,
  location,
  description,
  skills = [],
  delay = 0,
}) {
  const workTypeStyles = {
    Onsite:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400",
    Remote:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/40 dark:text-sky-400",
    Hybrid:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/40 dark:text-violet-400",
  };

  const typeStyle =
    workTypeStyles[type] ??
    "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300";

  return (
    <ScrollReveal delay={delay} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-2xl border border-[#e2e8df] bg-white shadow-sm p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:shadow-black/20 sm:p-7">
        {/* Subtle accent line */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-500/70 via-indigo-500/70 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
        />

        <div className="flex h-full flex-col">
          {/* Company and duration */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white sm:text-xl">
              {company}
            </h3>

            <span className="w-fit shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
              {duration}
            </span>
          </div>

          {/* Work type and location */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium ${typeStyle}`}
            >
              {type}
            </span>

            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <svg
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              {location}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {description}
          </p>

          {/* Skills learned */}
          {skills.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Skills & Technologies
              </h4>

              <ul
                aria-label={`Skills learned at ${company}`}
                className="flex flex-wrap gap-2"
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
            </div>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
}
