import projects from "../data/Projects.js";
import { ProjectCard } from "./ProjectCard.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        {/* Section heading */}
        <ScrollReveal delay={100}>
          <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            SELECTED WORK
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            Projects worth exploring.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            A selection of projects showcasing my approach to building
            thoughtful, responsive, and practical digital experiences.
          </p>
        </ScrollReveal>

        {/* Project cards */}
        {projects.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                skills={project.skills}
                delay={150 + index * 100}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
