export function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <div class="container navbar-content">
      <div class="navbar-logo">
        <button class="logo-btn">&lt;Dev /&gt;</button>
      </div>
      <div class="navbar-menu">
        <button class="nav-link" data-section="home">Home</button>
        <button class="nav-link" data-section="about">Sobre</button>
        <button class="nav-link" data-section="projects">Projetos</button>
        <button class="nav-link" data-section="contact">Contato</button>
      </div>
      <button class="menu-toggle" id="menuToggle">☰</button>
    </div>
  `;

  // Estilos da navbar
  const style = document.createElement('style');
  style.textContent = `
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background-color: var(--background);
      border-bottom: 1px solid var(--border);
      transition: all 0.3s ease;
    }

    .navbar.scrolled {
      background-color: rgba(10, 18, 23, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 237, 100, 0.1);
    }

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }

    .navbar-logo {
      flex-shrink: 0;
    }

    .logo-btn {
      font-size: 1.5rem;
      font-family: var(--font-display);
      font-weight: 700;
      color: var(--primary);
      background: none;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .logo-btn:hover {
      color: var(--primary-dark);
    }

    .navbar-menu {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      background: none;
      color: var(--text);
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.3s ease;
      padding: 0.5rem 0;
      border-bottom: 2px solid transparent;
    }

    .nav-link:hover {
      color: var(--primary);
      border-bottom-color: var(--primary);
    }

    .menu-toggle {
      display: none;
      background: none;
      color: var(--text);
      font-size: 1.5rem;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .navbar-menu {
        display: none;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        flex-direction: column;
        gap: 0;
        background-color: var(--background-light);
        border-bottom: 1px solid var(--border);
        padding: 1rem 0;
      }

      .navbar-menu.active {
        display: flex;
      }

      .nav-link {
        width: 100%;
        padding: 1rem;
        text-align: left;
        border-bottom: none;
      }

      .menu-toggle {
        display: block;
      }
    }
  `;
  document.head.appendChild(style);

  // Funcionalidade de scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Funcionalidade de navegação
  const navLinks = navbar.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const sectionId = e.target.dataset.section;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Fechar menu mobile
        const menu = navbar.querySelector('.navbar-menu');
        menu.classList.remove('active');
      }
    });
  });

  // Menu mobile
  const menuToggle = navbar.querySelector('#menuToggle');
  const menu = navbar.querySelector('.navbar-menu');
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Logo scroll to home
  const logoBtn = navbar.querySelector('.logo-btn');
  logoBtn.addEventListener('click', () => {
    const home = document.getElementById('home');
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return navbar;
}
