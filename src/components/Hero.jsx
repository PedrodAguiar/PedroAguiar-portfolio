const Hero = () => {
  const handleProjectsClick = () => {
    const projects = document.getElementById('projects')
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-white dark:bg-[#0A1217] transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <div className="animate-fade-in-up">
          <div className="h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400 mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 font-serif">
            Olá, sou <span className="text-blue-600 dark:text-green-400">Seu Nome</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">Front-end Developer</p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
            Desenvolvedor front-end apaixonado por criar interfaces modernas, responsivas e intuitivas.
            Especializado em JavaScript, HTML/CSS e design de experiência do usuário.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleProjectsClick}
              className="px-6 py-3 bg-blue-600 dark:bg-green-400 text-white dark:text-black font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-green-300 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Ver Projetos
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 dark:border-green-400 text-blue-600 dark:text-green-400 font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center items-center animate-fade-in-up">
          <div className="relative">
            <div className="w-80 h-80 border-4 border-blue-600 dark:border-green-400 rounded-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 hover:shadow-2xl hover:shadow-blue-400/40 dark:hover:shadow-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-7xl mb-4">👨‍💻</div>
              <p className="text-gray-500 dark:text-gray-400 text-center">Adicione sua foto aqui</p>
            </div>
            {/* Decorative Square */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-blue-600 dark:border-green-400 rounded-lg opacity-50" />
            {/* Decorative Circle */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-blue-600 dark:border-green-400 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
