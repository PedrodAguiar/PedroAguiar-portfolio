const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .footer {
          background-color: var(--card-bg);
          border-top: 1px solid var(--border);
          padding: 2rem 0;
        }

        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          text-align: center;
        }

        .footer-top p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-bottom {
          text-align: center;
        }

        .scroll-to-top {
          background: none;
          border: none;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .scroll-to-top:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .footer-top p {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <p>&copy; {currentYear} Todos os direitos reservados.</p>
            <p>Feito com ❤️ por você</p>
            <p>Desenvolvido com React e Vite</p>
          </div>
          <div className="footer-bottom">
            <button className="scroll-to-top" onClick={handleScrollToTop}>↑ Voltar ao topo</button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
