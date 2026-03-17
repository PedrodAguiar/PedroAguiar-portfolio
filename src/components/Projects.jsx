import { Github } from "lucide-react";
import PortfolioCard from "./PortfolioCard";

const projectsData = [
  {
    title: "BookVerse (Next.js)",
    description:
      "Plataforma de leitura e gerenciamento de livros, desenvolvida com Next.js e TypeScript, focada em performance e experiencia do usuario.",
    tags: ["Next.js", "TypeScript", "React", "API REST"],
    github: "https://github.com/PedrodAguiar/bookverse-next",
  },
  {
    title: "SCTEC Empreendimentos",
    description:
      "Website institucional moderno para empreendimentos, construido com React, TypeScript e TailwindCSS, com design responsivo e foco na apresentacao de projetos e contato.",
    tags: ["React", "TypeScript", "TailwindCSS", "UI/UX"],
    github: "https://github.com/PedrodAguiar/sctec-empreendimentos",
  },
  {
    title: "BookVerse (JavaScript)",
    description:
      "Aplicacao web para gerenciamento de livros, desenvolvida em React com TailwindCSS e consumo de API REST, demonstrando conceitos de desenvolvimento front-end.",
    tags: ["React", "TailwindCSS", "API REST", "JavaScript"],
    github: "https://github.com/PedrodAguiar/BookVerse",
  },
  {
    title: "Chatbot Intelbras",
    description:
      "Projeto de chatbot interativo que utiliza Python para web scraping dos dados da pagina da Intelbras, demonstrando habilidades em logica de conversacao e desenvolvimento de solucoes de comunicacao.",
    tags: ["Python", "Web Scraping", "Chatbot"],
    github: "https://github.com/PedrodAguiar/intelbras",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-4 transition-colors duration-300"
    >
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />
        <h2 className="font-bold text-4xl text-gray-900 dark:text-white mb-2 font-serif">
          Meus Projetos
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Aqui estao alguns dos projetos que desenvolvi. Cada um representa meu
          compromisso com qualidade e inovacao.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            icon={Github}
            action={{
              href: project.github,
              label: "C\u00f3digo",
            }}
            animationDelay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
