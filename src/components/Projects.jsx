const Projects = () => {
  const projectsData = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce moderna com carrinho de compras, filtros avançados e integração com pagamento.',
      tags: ['JavaScript', 'HTML/CSS', 'API REST'],
      live: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real.',
      tags: ['JavaScript', 'LocalStorage', 'Responsive'],
      live: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Website de portfólio responsivo com design moderno, animações suaves e otimização.',
      tags: ['HTML/CSS', 'JavaScript', 'Vite'],
      live: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard de clima interativo com previsão detalhada e gráficos.',
      tags: ['JavaScript', 'API Weather', 'Charts'],
      live: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="bg-gray-50 py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600" />
        <h2 className="font-bold text-4xl text-gray-900 mb-2 font-serif">
          Meus Projetos
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Aqui estão alguns dos projetos que desenvolvi. Cada um representa meu compromisso com qualidade e inovação.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center text-5xl">
              📱
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-2 font-serif">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-gray-100 text-blue-600 border border-gray-200 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.live}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 text-center text-sm"
                >
                  Ver ao vivo
                </a>
                <a
                  href={project.github}
                  className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center text-sm"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
