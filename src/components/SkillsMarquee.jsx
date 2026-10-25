const skills = [
  // Languages
  { name: "C#", icon: "/src/assets/skills/csharp.png" },
  { name: "Python", icon: "/src/assets/skills/python.png" },
  { name: "JavaScript", icon: "/src/assets/skills/javascript.png" },
  { name: "TypeScript", icon: "/src/assets/skills/typescript.png" },
  { name: "HTML5", icon: "/src/assets/skills/html.png" },
  { name: "CSS3", icon: "/src/assets/skills/css.png" },

  // Frameworks and libraries
  { name: ".NET", icon: "/src/assets/skills/dotnet.png" },
  { name: "React", icon: "/src/assets/skills/react.png" },
  { name: "Angular", icon: "/src/assets/skills/angular.png" },
  { name: "Node.js", icon: "/src/assets/skills/node-js.png" },
  { name: "Express.js", icon: "/src/assets/skills/express-js.png" },
  { name: "Bootstrap", icon: "/src/assets/skills/bootstrap.png" },
  { name: "Tailwind CSS", icon: "/src/assets/skills/tailwind-css.png" },
  { name: "Scikit Learn", icon: "/src/assets/skills/sk-learn.png" },
  { name: "Pandas", icon: "/src/assets/skills/pandas.png" },
  { name: "NumPy", icon: "/src/assets/skills/numpy.png" },
  { name: "PyTorch", icon: "/src/assets/skills/pytorch.png" },
  { name: "Fast API", icon: "/src/assets/skills/fast-api.png" },

  // Databases
  { name: "PostgreSQL", icon: "/src/assets/skills/postgresql.png" },
  // { name: "MySQL", icon: "/src/assets/skills" },
  // { name: "SQLite", icon: "/src/assets/skills" },
  { name: "SQL Server", icon: "/src/assets/skills/microsoft-sql-server.png" },
  { name: "MongoDB", icon: "/src/assets/skills/mongodb.png" },

  // Developer tools and platforms
  { name: "Visual Studio Code", icon: "/src/assets/skills/visual-studio.png" },
  { name: "Visual Studio", icon: "/src/assets/skills/vs-code.png" },
  // { name: "JetBrains Rider", icon: "/src/assets/skills" },
  { name: "Pycharm", icon: "/src/assets/skills/jetbrains-pycharm.png" },
  { name: "Jupyter Notebook", icon: "/src/assets/skills/jupyter-notebook.png" },
  { name: "Git", icon: "/src/assets/skills/git.png" },
  { name: "GitHub", icon: "/src/assets/skills/github.png" },
  { name: "Docker", icon: "/src/assets/skills/docker.png" },
  { name: "Azure", icon: "/src/assets/skills/azure.png" },
  { name: "AWS", icon: "/src/assets/skills/aws.png" },
  { name: "Redis", icon: "/src/assets/skills/redis.png" },
  { name: "RESTful APIs", icon: "/src/assets/skills/rest-api.png" },
  { name: "GraphQL", icon: "/src/assets/skills/graph-ql.png" },
];

function SkillsMarquee() {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      aria-label="Technologies and tools"
      className="skills-section border-y border-slate-800/80 py-8"
    >
      <div className="skills-marquee">
        <div className="skills-track">
          {duplicatedSkills.map((skill, index) => (
            
            <div
              key={`${skill.slug}-${index}`}
              className="skill-item group"
              aria-hidden={index >= skills.length ? "true" : undefined}
            >
              <img
                // src={`https://cdn.simpleicons.org/${skill.slug}`}
                src={skill.icon}
                alt=""
                title={skill.name}
                width="36"
                height="36"
                loading="lazy"
                decoding="async"
                draggable="false"
                className="h-8 w-8 object-contain opacity-70 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 sm:h-9 sm:w-9"
              />

              <span className="skill-tooltip" aria-hidden="true">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsMarquee;
