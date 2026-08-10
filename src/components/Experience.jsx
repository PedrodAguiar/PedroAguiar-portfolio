import { BriefcaseBusiness, Headset, Trophy } from "lucide-react";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

const experienceData = [
  {
    title: "Desenvolvedor Front-end Freelancer (Noah)",
    period: "2025 - 2026",
    description:
      "Atuação em demandas front-end com leitura de requisitos, lógica de programação, componentização e entregas alinhadas a necessidades reais de produto.",
    tags: ["React", "Next.js", "TypeScript", "APIs"],
    details:
      "Vivencia voltada a transformar requisitos em experiencias digitais bem estruturadas, com refinamento visual, organizacao de componentes e integracao com APIs quando necessario.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hackathon Intelbras",
    period: "Evento de curta duração",
    description:
      "Participação em desafio de curta duração para idealizar e prototipar uma solução com Python, web scraping e organização de dados coletados.",
    tags: ["Python", "Web Scraping", "Automação", "APIs"],
    details:
      "A experiência reforçou investigação de problemas, priorização sob pressão, automação de coleta de informações e transformação de uma ideia em protótipo funcional.",
    icon: Trophy,
  },
  {
    title: "Suporte Técnico N1",
    period: "2024 - 2025",
    description:
      "Atendimento inicial a usuários, triagem de chamados e apoio na identificação de problemas em sistemas, desenvolvendo base sólida de análise e comunicação.",
    tags: ["Sistemas", "Análise de Incidentes", "Investigação de Erros", "Comunicação"],
    details:
      "Essa etapa fortaleceu diagnóstico, organização, registro de informações e clareza na resolução de problemas, competências diretamente aplicáveis à análise de dados e melhoria de processos.",
    icon: Headset,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-[#0A1217] py-20 px-4 transition-colors duration-300"
    >
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />
        <h2 className="font-bold text-4xl text-gray-900 dark:text-white mb-2 font-serif">
          {"Experi\u00eancia"}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Vivências que construíram minha base técnica em sistemas,
          investigação de problemas, APIs e raciocínio lógico aplicado a Dados.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {experienceData.map((experience, index) => (
          <ExperienceTimelineItem
            key={experience.title}
            title={experience.title}
            period={experience.period}
            description={experience.description}
            tags={experience.tags}
            details={experience.details}
            icon={experience.icon}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
