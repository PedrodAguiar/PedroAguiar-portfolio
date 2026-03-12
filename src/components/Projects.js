export function createProjects() {
  const projects = document.createElement('section');
  projects.id = 'projects';
  projects.className = 'projects';

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
  ];

  projects.innerHTML = `
    <div class="container projects-content">
      <div class="projects-header animate-fadeInUp">
        <div class="accent-line"></div>
        <h2>Meus Projetos</h2>
        <p>Aqui estão alguns dos projetos que desenvolvi. Cada um representa meu compromisso com qualidade e inovação.</p>
      </div>

      <div class="projects-grid">
        ${projectsData.map((project, index) => `
          <div class="project-card animate-fadeInUp" style="animation-delay: ${index * 0.1}s">
            <div class="project-image">
              <div class="image-placeholder">📱</div>
            </div>
            <div class="project-body">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
              <div class="project-buttons">
                <a href="${project.live}" class="btn btn-primary btn-small">Ver ao vivo</a>
                <a href="${project.github}" class="btn btn-secondary btn-small">Código</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .projects {
      background-color: var(--background);
    }

    .projects-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .projects-header .accent-line {
      margin: 0 auto 1rem;
    }

    .projects-header h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
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
    }

    .project-card {
      background-color: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.3s ease;
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

    .btn-small {
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
      flex: 1;
      justify-content: center;
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .projects-header h2 {
        font-size: 2rem;
      }
    }
  `;
  document.head.appendChild(style);

  return projects;
}
