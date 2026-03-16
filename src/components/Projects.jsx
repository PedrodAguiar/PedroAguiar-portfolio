import { Github } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      title: "BookVerse (Next.js)",
      description:
        "Plataforma de leitura e gerenciamento de livros, desenvolvida com Next.js e TypeScript, focada em performance e experiência do usuário.",
      tags: ["Next.js", "TypeScript", "React", "API REST"],
      live: "#", // Substituir pelo link de deploy, se houver
      github: "https://github.com/PedrodAguiar/bookverse-next",
    },
    {
      title: "SCTEC Empreendimentos",
      description:
        "Website institucional moderno para empreendimentos, construído com React, TypeScript e TailwindCSS, com design responsivo e foco na apresentação de projetos e contato.",
      tags: ["React", "TypeScript", "TailwindCSS", "UI/UX"],
      live: "#", // Substituir pelo link de deploy, se houver
      github: "https://github.com/PedrodAguiar/sctec-empreendimentos",
    },
    {
      title: "BookVerse (JavaScript )",
      description:
        "Aplicação web para gerenciamento de livros, desenvolvida em React com TailwindCSS e consumo de API REST, demonstrando conceitos de desenvolvimento Front-end.",
      tags: ["React", "TailwindCSS", "API REST", "JavaScript"],
      live: "#", // Substituir pelo link de deploy, se houver
      github: "https://github.com/PedrodAguiar/BookVerse",
    },
    {
      title: "Chatbot Intelbras",
      description:
        "Projeto de chatbot interativo que utiliza Python para web scraping dos dados da página da Intelbras, demonstrando habilidades em lógica de conversação e desenvolvimento de soluções de comunicação.",
      tags: ["Python", "Web Scraping", "Chatbot"],
      live: "#", // Substituir pelo link de deploy, se houver
      github: "https://github.com/PedrodAguiar/intelbras",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-4 transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />
        <h2 className="font-bold text-4xl text-gray-900 dark:text-white mb-2 font-serif">
          Meus Projetos
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Aqui estão alguns dos projetos que desenvolvi. Cada um representa meu
          compromisso com qualidade e inovação.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white dark:bg-[#0A1217] border border-gray-200 dark:border-green-500/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-600 dark:hover:border-green-400 hover:shadow-lg dark:hover:shadow-green-400/20 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image */}
            <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Github
                size={80}
                className="text-blue-600 dark:text-green-400"
              />{" "}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 font-serif">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-green-400 border border-gray-200 dark:border-green-500/30 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex-1 px-4 py-2 border-2 border-blue-600 dark:border-green-400 text-blue-600 dark:text-green-400 font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-300 text-center text-sm"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
