import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
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
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .navbar-logo button {
          font-size: 1.5rem;
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--primary);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .navbar-logo button:hover {
          color: var(--primary-dark);
        }

        .navbar-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          background: none;
          border: none;
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
          border: none;
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
      `}</style>

      <nav className="navbar" id="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <button onClick={handleLogoClick}>&lt;Dev /&gt;</button>
          </div>
          <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            <button className="nav-link" onClick={() => handleScroll('home')}>Home</button>
            <button className="nav-link" onClick={() => handleScroll('about')}>Sobre</button>
            <button className="nav-link" onClick={() => handleScroll('projects')}>Projetos</button>
            <button className="nav-link" onClick={() => handleScroll('contact')}>Contato</button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
