import { Github } from "lucide-react";
import PortfolioCard from "./PortfolioCard";

const projectsData = [
  {
    title: "Análise de Desempenho de Estudantes",
    description:
      "Análise exploratória em Python para investigar relações entre hábitos de estudo, sono, frequência, redes sociais e desempenho acadêmico, com estatística e visualizações.",
    tags: ["Python", "Pandas", "Seaborn", "EDA"],
    github: "https://github.com/PedrodAguiar/analise-desempenho-estudantes",
  },
  {
    title: "Análise de Imóveis com Pandas",
    description:
      "Notebook de análise exploratória com Pandas usando uma base de imóveis para aluguel, incluindo inspeção de dados, estatísticas descritivas, agrupamentos e gráficos.",
    tags: ["Python", "Pandas", "Jupyter", "EDA"],
    github: "https://github.com/PedrodAguiar/analise-imoveis-pandas",
  },
  {
    title: "Análise de Dados de Alunos",
    description:
      "Projeto em Pandas para praticar limpeza e transformação de dados de alunos, com tratamento de valores nulos, filtros, criação de colunas, regras de aprovação e exportação em CSV.",
    tags: ["Python", "Pandas", "Limpeza de Dados", "CSV"],
    github: "https://github.com/PedrodAguiar/Alunos_data",
  },
  {
    title: "Assistente de Compras Intelbras",
    description:
      "Assistente baseado em uma base CSV de produtos, com recomendação via Groq/Llama 3 e scripts Python com Selenium para coleta e enriquecimento automatizado dos dados.",
    tags: ["Python", "Selenium", "CSV", "IA"],
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
          Projetos que conectam minha base em desenvolvimento de software com
          organização de informações, APIs, automação e resolução de problemas.
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
