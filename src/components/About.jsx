const About = () => {
  const skills = [
    "JavaScript",
    "HTML/CSS",
    "Responsive Design",
    "Git",
    "React",
    "Next.js",
    "TypeScript",
    "MySQL",
    "Web APIs",
    "Performance",
  ];


  return (
    <section
      id="about"
      className="bg-white dark:bg-[#0A1217] py-20 px-4 transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />
        <h2 className="font-bold text-4xl text-gray-900 dark:text-white mb-2 font-serif">
          Sobre Mim
        </h2>
      </div>

      {/* Grid: Text + Skills */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* About Text */}
        <div>
          <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4 font-serif">
            Quem sou eu?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Olá! Sou o Pedro Daniel Aguiar, desenvolvedor Front-end freelancer
            especializado em criar interfaces intuitivas e responsivas com React
            e Next.js. Concluí minha graduação em Análise e Desenvolvimento de
            Sistemas e busco expandir minhas habilidades.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Atualmente, curso Ciência de Dados e Inteligência Artificial no
            UniSenai, visando combinar minha expertise Front-end com análise de
            dados. Estou em busca de oportunidades de estágio para aplicar e
            aprimorar meus conhecimentos em um ambiente dinâmico.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6 font-serif">
            Habilidades
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-green-500/30 rounded-md px-4 py-3 text-center font-medium text-gray-700 dark:text-gray-300 cursor-default transition-all duration-300 hover:border-blue-600 dark:hover:border-green-400 hover:text-blue-600 dark:hover:text-green-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
