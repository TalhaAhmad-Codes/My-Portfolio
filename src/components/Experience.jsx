import experience from "../data/Experience.js";
import ExperienceCard from "./ExperienceCard.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        {/* Section heading */}
        <ScrollReveal delay={100}>
          <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            PROFESSIONAL JOURNEY
          </p>

          <h2
            id="experience-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
          >
            Experience & growth.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            My professional journey and skills I've developed along the way.
          </p>
        </ScrollReveal>

        {/* Experience cards */}
        {experience.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
            {experience.map((item, index) => (
              <ExperienceCard
                key={item.id}
                company={item.company}
                duration={item.duration}
                type={item.type}
                location={item.location}
                description={item.description}
                skills={item.skills}
                delay={150 + index * 100}
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            Experience details will be added soon.
          </p>
        )}
      </div>
    </section>
  );
}
