import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { experienceData } from "../constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[linear-gradient(to_top_right,_#3b0764,_#030712,_#000000,_#030712,_#3b076480)] py-20"
    >
      <div className=" py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
          Experiência Profissional
        </h2>

        <div className="space-y-8">
          {experienceData.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-950 rounded-2xl p-6 sm:p-8 border border-purple-800/30 shadow-xl"
            >
              <div className={`border-l-4 ${experience.color} pl-6`}>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">
                  {experience.position}
                </h3>
                <p
                  className={`${experience.accentColor} text-sm sm:text-base font-semibold mb-6`}
                >
                  {experience.company} · {experience.period}
                </p>

                <div className="space-y-6">
                  {experience.projects.map((project, projectIndex) => (
                    <div key={projectIndex}>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-300 mb-3">
                        {project.title}
                      </h4>
                      <ul className="space-y-2 text-gray-400 ml-4">
                        {project.responsibilities.map(
                          (responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-center space-x-2"
                            >
                              <MdKeyboardDoubleArrowRight className="text-purple-500 flex-shrink-0" />

                              <span className="text-[0.8rem] sm:text-sm leading-relaxed">
                                {responsibility}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
