import { FaGithub, FaYoutube } from "react-icons/fa";
import { projects } from "../constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[linear-gradient(to_bottom_right,_#3b0764,_#030712,_#000000,_#030712,_#3b076480)]  py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-xl p-8 border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
            >
              <div className="space-y-5">
                <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[0.8rem] sm:text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 transition-all duration-300 transform hover:-translate-y-1 bg-purple-600/15 text-purple-300 rounded-full text-[0.75rem] sm:text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-800 hover:to-violet-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {project.type === "github" ? (
                      <FaGithub className="text-base" />
                    ) : (
                      <FaYoutube className="text-base" />
                    )}
                    <span className="text-[0.8rem] sm:text-sm">
                      Ver Projeto
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
