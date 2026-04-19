import { DiJavascript1 } from "react-icons/di";
import {
  FaGlobe,
  FaGraduationCap,
  FaMicrophone,
  FaReact,
  FaTrophy,
} from "react-icons/fa";
import { SiVuedotjs, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

export const techIcons = [
  { Icon: FaReact, name: "React" },
  { Icon: TbBrandTypescript, name: "TypeScript" },
  { Icon: SiVuedotjs, name: "Vue.js" },
  { Icon: DiJavascript1, name: "JavaScript" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiNextdotjs, name: "Next.js" },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Vue 3",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "HTML5",
      "CSS3",
      "Liquid",
    ],
  },
  {
    category: "Styling & UI/UX",
    skills: [
      "Tailwind CSS",
      "Framer Motion",
      "React Three Fiber",
      "Responsive Design",
      "Design Systems",
      "Vuetify",
    ],
  },
  {
    category: "Backend & APIs",
    skills: ["REST APIs", "GraphQL", "Axios", "NestJS", "AWS Lambda", "MySQL"],
  },
  {
    category: "Ferramentas",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "AWS (Amplify, DynamoDB, S3)",
      "Shopify",
      "GTM",
      "Google Analytics",
      "RD Station",
    ],
  },
];

export const achievements = [
  { icon: FaTrophy, text: "1º Lugar · Hackathon CompreSuaPeça / FMU" },
  {
    icon: FaMicrophone,
    text: "Participação no Podcast F CAST (FMU FIAM FAAM)",
    link: "https://www.youtube.com/watch?v=p0FvhGwmywA",
  },
  {
    icon: FaGraduationCap,
    text: "Ciência da Computação · FMU (Jan/2024 - Dez/2027)",
  },
  { icon: FaGlobe, text: "Inglês B2 · Espanhol A2" },
];

export const experienceData = [
  {
    id: 1,
    position: "Desenvolvedora Front-end Júnior",
    company: "R&B Rastreabilidade Brasil",
    period: "Mar/2026 - Atual",
    color: "border-violet-500",
    accentColor: "text-violet-400",
    projects: [
      {
        title: "Interfaces de Rastreamento com Leitores RFID",
        responsibilities: [
          "Desenvolvimento de telas para integração e leitura de dispositivos RFID em Vue 3 + TypeScript",
          "Consumo de APIs RESTful para rastreabilidade em tempo real de ativos",
          "Estilização web responsiva e componentização de interfaces industriais",
          "Migração de componentes legados de Angular para Vue 3, modernizando a base de código",
        ],
      },
    ],
  },
  {
    id: 2,
    position: "Desenvolvedora Front-end Júnior",
    company: "CompreSuaPeça",
    period: "Ago/2025 - Mar/2026",
    color: "border-purple-500",
    accentColor: "text-purple-400",
    projects: [
      {
        title: "Manutenção e Backend com NestJS",
        responsibilities: [
          "Manutenção de endpoints e serviços em NestJS, apoiando o time de backend em demandas pontuais",
          "Manutenção e implementação de tagueamento GTM via Third Parties em aplicações Next.js",
          "Implementação de integração com Google Tag Manager e Google Analytics em 15+ páginas",
        ],
      },
      {
        title: "Interface de Compatibilidade de Veículos",
        responsibilities: [
          "Interface com renderização condicional e gerenciamento de estado otimizado, reduzindo carregamento em 60%",
          "Tutorial interativo com React Tour para melhorar a usabilidade do usuário final",
        ],
      },
      {
        title: "Sistema de Busca Inteligente de Peças",
        responsibilities: [
          "Integração da API do Detran com GraphQL e Lambda functions (.mjs) para busca por placa",
          "Melhoria de 45% na experiência de compra e redução da taxa de abandono no funil",
        ],
      },
      {
        title: "Componentes Shopify & Design System",
        responsibilities: [
          "Componentes Liquid modulares com tags de schema JSON para Shopify, reduzindo dependência de dev em 80% dos casos",
          "Componentes React reutilizáveis com TypeScript e Tailwind CSS via Vite, reduzindo em 30% o tempo de novas páginas",
        ],
      },
    ],
  },
  {
    id: 3,
    position: "Estagiária em Desenvolvimento de Software (Front-end)",
    company: "CompreSuaPeça",
    period: "Dez/2024 - Ago/2025",
    color: "border-purple-700",
    accentColor: "text-purple-500",
    projects: [
      {
        title: "SPAs e Landing Pages",
        responsibilities: [
          "Desenvolvimento de Single Page Applications com React 18+ e TypeScript, otimizando carregamento em 35%",
          "15+ landing pages com design responsivo e cross-browser, atingindo taxa de conversão média de 4,2%",
          "Integração de APIs RESTful com Axios, reduzindo chamadas desnecessárias em 40% via cache e interceptors",
          "Participação ativa em 5+ sessões de code review semanais",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "PEORA · People Care AI",
    description:
      "Assistente inteligente para gestão de afastamentos e retorno ao trabalho no contexto corporativo brasileiro. Aplicação desenvolvida em React + TypeScript com integração a LLM via Groq, utilizando system prompt estruturado para conduzir fluxos conversacionais guiados, simulando cenários de licenças médicas, benefícios previdenciários e tomada de decisão administrativa.",
    link: "https://github.com/Samara-Padrao/peora",
    type: "github",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Groq API", "LLM"],
  },
  {
    title: "Interface de Compatibilidade Automotiva",
    description:
      "Interface com renderização condicional e gerenciamento de estado otimizado para processar grande volume de dados de peças automotivas. Inclui busca inteligente por placa via API do Detran integrada com GraphQL, tutorial interativo com React Tour e redução de 60% no tempo de carregamento.",
    tech: ["React", "TypeScript", "GraphQL", "Tailwind CSS", "AWS Lambda"],
  },
 {
    title: "Hackathon CompreSuaPeça · 1º Lugar",
    description:
      "Solução desenvolvida em equipe para o desafio 'Aplicação de Peças no Mercado Automotor' durante hackathon institucional. Criação de protótipos no Figma com navegação interativa, validação de UX com stakeholders e apresentação ao vivo para banca de especialistas com transmissão simultânea no YouTube.",
    link: "https://www.youtube.com/watch?v=DNYLjrkkyOI&t=1h43m8s",
    type: "youtube",
    tech: ["Figma", "UX/UI"],
  },
];
