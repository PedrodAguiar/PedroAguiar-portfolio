export function createAbout() {
  const about = document.createElement('section');
  about.id = 'about';
  about.className = 'about';
  about.innerHTML = `
    <div class="container about-content">
      <div class="about-header animate-fadeInUp">
        <div class="accent-line"></div>
        <h2>Sobre Mim</h2>
        <p>Desenvolvedor front-end apaixonado por criar interfaces modernas e responsivas</p>
      </div>

      <div class="about-grid">
        <div class="about-text animate-slideInLeft">
          <h3>Quem sou eu?</h3>
          <p>
            Sou um desenvolvedor front-end dedicado com paixão por criar experiências de usuário 
            excepcionais. Com experiência em JavaScript, HTML/CSS e design responsivo, trabalho para 
            transformar ideias em soluções digitais elegantes e funcionais.
          </p>
          <p>
            Acredito que bom design e código limpo andam de mãos dadas. Estou sempre aprendendo 
            novas tecnologias e buscando melhorar minhas habilidades para entregar projetos de 
            alta qualidade.
          </p>
        </div>

        <div class="about-skills animate-slideInRight">
          <h3>Habilidades</h3>
          <div class="skills-grid">
            <div class="skill-item">JavaScript</div>
            <div class="skill-item">HTML/CSS</div>
            <div class="skill-item">Responsive Design</div>
            <div class="skill-item">Git</div>
            <div class="skill-item">Web APIs</div>
            <div class="skill-item">Performance</div>
          </div>
        </div>
      </div>

      <div class="about-stats">
        <div class="stat-item animate-fadeInUp" style="animation-delay: 0.1s">
          <p class="stat-number">5+</p>
          <p class="stat-label">Anos de Experiência</p>
        </div>
        <div class="stat-item animate-fadeInUp" style="animation-delay: 0.2s">
          <p class="stat-number">20+</p>
          <p class="stat-label">Projetos Completados</p>
        </div>
        <div class="stat-item animate-fadeInUp" style="animation-delay: 0.3s">
          <p class="stat-number">15+</p>
          <p class="stat-label">Clientes Satisfeitos</p>
        </div>
        <div class="stat-item animate-fadeInUp" style="animation-delay: 0.4s">
          <p class="stat-number">100%</p>
          <p class="stat-label">Dedicação</p>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .about {
      background-color: var(--card-bg);
    }

    .about-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .about-header .accent-line {
      margin: 0 auto 1rem;
    }

    .about-header h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .about-header p {
      font-size: 1.1rem;
      color: var(--text-muted);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .about-text h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .about-text p {
      margin-bottom: 1rem;
      line-height: 1.8;
    }

    .about-skills h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .skill-item {
      background-color: var(--background);
      padding: 1rem;
      border-radius: 6px;
      border: 1px solid var(--border);
      text-align: center;
      font-weight: 500;
      transition: all 0.3s ease;
      cursor: default;
    }

    .skill-item:hover {
      border-color: var(--primary);
      color: var(--primary);
    }

    .about-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border);
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .about-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .about-header h2 {
        font-size: 2rem;
      }
    }
  `;
  document.head.appendChild(style);

  return about;
}
