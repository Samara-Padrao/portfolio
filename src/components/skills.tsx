import { skillGroups, achievements } from "../constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[linear-gradient(to_bottom_right,_#3b0764,_#030712,_#000000,_#030712,_#3b076480)]  py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
          Skills & Conquistas
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-xl p-6 border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-purple-400 mb-4 uppercase tracking-widest">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-purple-600/10 text-gray-300 rounded-lg text-xs border border-purple-700/30 hover:border-purple-500/60 hover:text-purple-300 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-950 rounded-2xl p-6 sm:p-8 border border-purple-800/30">
          <h3 className="text-sm font-bold text-purple-400 mb-6 uppercase tracking-widest">
            Conquistas & Formação
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 text-gray-300 text-sm 
                    ${
                      item.link
                        ? "italic text-purple-400 underline cursor-pointer hover:text-purple-500 transition-colors duration-200"
                        : ""
                    }`}
                >
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-4">
                      <Icon className="text-purple-400 text-xl" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <>
                      <Icon className="text-purple-400 text-xl" />
                      <span>{item.text}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
                