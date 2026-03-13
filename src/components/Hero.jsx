const Hero = () => {
  const handleProjectsClick = () => {
    const projects = document.getElementById('projects')
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <style>{`
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
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          z-index: 10;
          animation: slideInLeft 0.6s ease-out;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
          font-family: var(--font-display);
          font-weight: 700;
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

        .btn {
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-body);
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

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          animation: slideInRight 0.6s ease-out;
        }

        .profile-image {
          width: 350px;
          height: 350px;
          border: 3px solid var(--primary);
          border-radius: 50%;
          overflow: visible;
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

        /* Elementos decorativos - CORRIGIDOS */
        .profile-image::before {
          content: '';
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 100px;
          height: 100px;
          border: 2px solid var(--primary);
          border-radius: 8px;
          opacity: 0.5;
          z-index: -1;
        }

        .profile-image::after {
          content: '';
          position: absolute;
          top: -30px;
          left: -30px;
          width: 60px;
          height: 60px;
          border: 2px solid var(--primary);
          border-radius: 50%;
          opacity: 0.3;
          z-index: -1;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
      `}</style>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <div className="accent-line"></div>
            <h1>Olá, sou <span className="highlight">Seu Nome</span></h1>
            <p className="hero-subtitle">Front-end Developer</p>
            <p className="hero-description">
              Desenvolvedor front-end apaixonado por criar interfaces modernas, responsivas e intuitivas. 
              Especializado em JavaScript, HTML/CSS e design de experiência do usuário.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleProjectsClick}>Ver Projetos</button>
              <button className="btn btn-secondary">Download CV</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <div className="placeholder">👨‍💻</div>
              <p>Adicione sua foto aqui</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
