export function createHero() {
  const hero = document.createElement('section');
  hero.id = 'home';
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="container hero-content">
      <div class="hero-text animate-slideInLeft">
        <div class="accent-line"></div>
        <h1>Olá, sou <span class="highlight">Seu Nome</span></h1>
        <p class="hero-subtitle">Front-end Developer</p>
        <p class="hero-description">
          Desenvolvedor front-end apaixonado por criar interfaces modernas, responsivas e intuitivas. 
          Especializado em JavaScript, HTML/CSS e design de experiência do usuário.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" id="projectsBtn">Ver Projetos</button>
          <button class="btn btn-secondary">Download CV</button>
        </div>
      </div>
      <div class="hero-image animate-slideInRight">
        <div class="profile-image">
          <div class="placeholder">👨‍💻</div>
          <p>Adicione sua foto aqui</p>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 64px;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .hero-text {
      z-index: 10;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .hero h1 .highlight {
      color: var(--primary);
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .hero-description {
      font-size: 1.1rem;
      color: var(--text);
      margin-bottom: 2rem;
      line-height: 1.8;
      max-width: 500px;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .profile-image {
      width: 350px;
      height: 350px;
      border: 3px solid var(--primary);
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--card-bg);
      transition: all 0.3s ease;
      position: relative;
    }

    .profile-image:hover {
      box-shadow: 0 0 30px rgba(0, 237, 100, 0.4);
      transform: scale(1.05);
    }

    .profile-image .placeholder {
      font-size: 5rem;
      margin-bottom: 1rem;
    }

    .profile-image p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .profile-image::before {
      content: '';
      position: absolute;
      bottom: -20px;
      right: -20px;
      width: 100px;
      height: 100px;
      border: 2px solid var(--primary);
      border-radius: 8px;
      opacity: 0.5;
    }

    .profile-image::after {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      width: 60px;
      height: 60px;
      border: 2px solid var(--primary);
      border-radius: 50%;
      opacity: 0.3;
    }

    @media (max-width: 768px) {
      .hero {
        min-height: auto;
        padding-top: 2rem;
      }

      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .hero h1 {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .profile-image {
        width: 250px;
        height: 250px;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `;
  document.head.appendChild(style);

  // Scroll para projetos
  const projectsBtn = hero.querySelector('#projectsBtn');
  projectsBtn.addEventListener('click', () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return hero;
}
