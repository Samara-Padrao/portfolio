import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { techIcons } from "../constants";

export const Contact = () => {

  return (
    <section
      id="contact"
      className="min-h-max py-24 sm:py-32 bg-[linear-gradient(to_top_right,_#3b0764,_#030712,_#000000,_#030712,_#3b076480)]  flex items-center justify-center"
    >
      <div className="text-center space-y-8 px-6">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-300 to-purple-600 bg-clip-text text-transparent">
            Samara Santos Padrão
          </h1>
          <p className="text-base sm:text-lg font-semibold text-purple-300">
            Desenvolvedora Front-end
          </p>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Experiência ativa em React, Vue e TypeScript · Interfaces escaláveis e performáticas ·
            São Paulo, SP
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300">
            <MdMailOutline className="text-lg sm:text-2xl" />
            <a target="_blank" href="mailto:samara.s.padrao@gmail.com" className="text-sm sm:text-base">
              samara.s.padrao@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-300 hover:text-violet-400 transition-colors duration-300">
            <LuPhone className="text-lg sm:text-2xl" />
            <a className="text-sm sm:text-base" target="_blank" href="https://wa.me/5511968437167">
              (11) 96843-7167
            </a>
          </div>
        </div>

        <div className="pt-8">
          <h3 className="text-sm sm:text-base font-semibold text-gray-500 mb-6 uppercase tracking-widest">
            Tecnologias
          </h3>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-4 max-w-md mx-auto">
            {techIcons.map(({ Icon, name }) => (
              <div
                key={name}
                className="group relative p-3 m-auto bg-gray-900/60 backdrop-blur-sm border border-purple-800/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:scale-110 hover:rotate-3"
                title={name}
              >
                <Icon className="text-[1.5rem] text-white group-hover:text-purple-400 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <div className="w-80 h-1 bg-gradient-to-r from-purple-500 to-violet-400 mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

