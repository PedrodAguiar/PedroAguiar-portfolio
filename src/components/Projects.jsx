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
    <>
      <style>{`
        .projects {
          background-color: var(--background);
        }

        .projects-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .projects-header .accent-line {
          margin: 0 auto 1rem;
          height: 4px;
          width: 48px;
          background-color: var(--primary);
          border-radius: 9999px;
        }

        .projects-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-display);
          font-weight: 700;
        }

        .projects-header p {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .project-card {
          background-color: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out;
        }

        .project-card:hover {
          border-color: var(--primary);
          box-shadow: 0 8px 24px rgba(0, 237, 100, 0.15);
          transform: translateY(-4px);
        }

        .project-image {
          height: 200px;
          background-color: var(--background);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .image-placeholder {
          font-size: 4rem;
        }

        .project-body {
          padding: 1.5rem;
        }

        .project-body h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-display);
          font-weight: 700;
        }

        .project-body p {
          color: var(--text);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          background-color: var(--background);
          color: var(--primary);
          border: 1px solid var(--border);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .project-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .btn {
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          flex: 1;
          justify-content: center;
          border-radius: 6px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-body);
          text-decoration: none;
        }

        .btn-primary {
          background-color: var(--primary);
          color: var(--background);
        }

        .btn-primary:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
          background-color: var(--primary);
          color: var(--background);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="projects" id="projects" style={{ padding: '80px 0' }}>
        <div className="projects-header">
          <div className="accent-line"></div>
          <h2>Meus Projetos</h2>
          <p>Aqui estão alguns dos projetos que desenvolvi. Cada um representa meu compromisso com qualidade e inovação.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="image-placeholder">📱</div>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.live} className="btn btn-primary">Ver ao vivo</a>
                  <a href={project.github} className="btn btn-secondary">Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
