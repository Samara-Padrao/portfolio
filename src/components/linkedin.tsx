import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import myImage  from "../assets/eunopodcastsorrindo.png";

export const Linkedin = () => {
  return (
    <section
      id="linkedin"
      className="sm:min-h-screen bg-gradient-to-l from-black via-gray-950 to-purple-950 
      flex items-center justify-center"
    >
      <div className="mx-auto px-6 hover:scale-105 duration-200">
        <div className="p-[2px] rounded-2xl">
          <div className="bg-gray-950 rounded-2xl p-8 border border-purple-800/30 shadow-2xl">
            <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              Sobre mim
            </h2>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="flex-shrink-0">
                <div className="relative w-28 h-28 sm:w-48 sm:h-48 rounded-full p-[4px] hover:scale-105 duration-200">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-violet-800 animate-spin"></div>
                  <div className="relative w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <img
                      src={myImage}
                      alt="Foto de perfil"
                      className="w-24 h-24 sm:w-44 sm:h-44 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-md sm:text-2xl font-bold text-white mb-1">
                    Samara Santos Padrão
                  </h3>
                  <p className="text-sm sm:text-base text-purple-400 font-semibold mb-3">
                    Desenvolvedora Front-end · São Paulo, SP
                  </p>
                  <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                    Desenvolvedora Front-end com experiência em React, Vue e TypeScript.
                    Vencedora do 1º lugar em hackathon institucional, apaixonada por interfaces
                    performáticas e soluções de e-commerce. Atualmente atuando na R&B Rastreabilidade Brasil.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => window.open("https://www.linkedin.com/in/samara-padrao/", "_blank")}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-800 hover:to-violet-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FiLinkedin className="text-xl" />
                    <span className="font-semibold text-sm">LinkedIn</span>
                  </button>

                  <button
                    onClick={() => window.open("https://github.com/samara-padrao", "_blank")}
                    className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 border border-purple-700/40 hover:border-purple-500 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FiGithub className="text-xl" />
                    <span className="font-semibold text-sm">GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}