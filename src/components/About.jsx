const About = () => {
  return (
    <>
      <style>{`
        .about {
          background-color: var(--card-bg);
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .about-header .accent-line {
          margin: 0 auto 1rem;
          height: 4px;
          width: 48px;
          background-color: var(--primary);
          border-radius: 9999px;
        }

        .about-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-display);
          font-weight: 700;
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
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
        }

        .about-text h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-family: var(--font-display);
          font-weight: 700;
        }

        .about-text p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .about-skills h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-display);
          font-weight: 700;
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
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .stat-item {
          text-align: center;
          animation: fadeInUp 0.6s ease-out;
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
      `}</style>

      <section className="about" id="about" style={{ padding: '80px 0' }}>
        <div className="about-header">
          <div className="accent-line"></div>
          <h2>Sobre Mim</h2>
          <p>Desenvolvedor front-end apaixonado por criar interfaces modernas e responsivas</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
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

          <div className="about-skills">
            <h3>Habilidades</h3>
            <div className="skills-grid">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML/CSS</div>
              <div className="skill-item">Responsive Design</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">Web APIs</div>
              <div className="skill-item">Performance</div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <p className="stat-number">5+</p>
            <p className="stat-label">Anos de Experiência</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">20+</p>
            <p className="stat-label">Projetos Completados</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">15+</p>
            <p className="stat-label">Clientes Satisfeitos</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">100%</p>
            <p className="stat-label">Dedicação</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
