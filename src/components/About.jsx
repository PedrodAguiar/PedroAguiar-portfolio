const About = () => {
  const skills = [
    "JavaScript",
    "HTML/CSS",
    "Responsive Design",
    "Git",
    "Web APIs",
    "Performance",
  ]

  const stats = [
    { number: "5+", label: "Anos de Experiência" },
    { number: "20+", label: "Projetos Completados" },
    { number: "15+", label: "Clientes Satisfeitos" },
    { number: "100%", label: "Dedicação" },
  ]

  return (
    <section id="about" className="bg-white dark:bg-[#0A1217] py-20 px-4 transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />
        <h2 className="font-bold text-4xl text-gray-900 dark:text-white mb-2 font-serif">
          Sobre Mim
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Desenvolvedor front-end apaixonado por criar interfaces modernas e responsivas
        </p>
      </div>

      {/* Grid: Text + Skills */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* About Text */}
        <div>
          <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4 font-serif">
            Quem sou eu?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Sou um desenvolvedor front-end dedicado com paixão por criar experiências de usuário
            excepcionais. Com experiência em JavaScript, HTML/CSS e design responsivo, trabalho para
            transformar ideias em soluções digitais elegantes e funcionais.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Acredito que bom design e código limpo andam de mãos dadas. Estou sempre aprendendo
            novas tecnologias e buscando melhorar minhas habilidades para entregar projetos de
            alta qualidade.
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

      {/* Stats */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-green-500/30">
        {stats.map(({ number, label }) => (
          <div key={label} className="text-center animate-fade-in-up">
            <p className="text-4xl font-bold text-blue-600 dark:text-green-400 mb-1">{number}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
