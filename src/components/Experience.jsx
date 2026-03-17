import { BriefcaseBusiness, Headset, Trophy } from "lucide-react";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

const experienceData = [
  {
    title: "Desenvolvedor Front-end Freelancer (Noah)",
    period: "Atual",
    description:
      "Atuacao em demandas front-end com foco em interfaces responsivas, componentizacao e entregas alinhadas a necessidades reais de produto.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    details:
      "Vivencia voltada a transformar requisitos em experiencias digitais bem estruturadas, com refinamento visual, organizacao de componentes e integracao com APIs quando necessario.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hackathon Intelbras",
    period: "Evento de curta duracao",
    description:
      "Participacao em um desafio com prazo reduzido para idealizar e prototipar uma solucao aplicada, mantendo foco em validacao rapida e entrega funcional.",
    tags: ["Python", "Web Scraping", "Chatbot", "APIs"],
    details:
      "A experiencia reforcou trabalho em equipe, priorizacao sob pressao e capacidade de transformar uma ideia em prototipo navegavel dentro de uma janela curta de execucao.",
    icon: Trophy,
  },
  {
    title: "Suporte Tecnico N1",
    period: "Experiencia anterior",
    description:
      "Atendimento inicial a usuarios, triagem de chamados e apoio na identificacao de problemas, desenvolvendo base solida de analise e comunicacao.",
    tags: ["Atendimento", "Analise de Incidentes", "Sistemas", "Comunicacao"],
    details:
      "Essa etapa fortaleceu diagnostico, organizacao e clareza na resolucao de problemas, habilidades que hoje se refletem na forma como os produtos sao pensados e implementados.",
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
          Uma visao cronologica das vivencias que ajudaram a construir minha
          evolucao tecnica e minha forma de resolver problemas.
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
