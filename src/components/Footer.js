export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
    <div class="container footer-content">
      <div class="footer-top">
        <p>&copy; ${currentYear} Todos os direitos reservados.</p>
        <p>Feito com ❤️ por você</p>
        <p>Desenvolvido com JavaScript e Vite</p>
      </div>
      <div class="footer-bottom">
        <button class="scroll-to-top">↑ Voltar ao topo</button>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .footer {
      background-color: var(--card-bg);
      border-top: 1px solid var(--border);
      padding: 2rem 0;
    }

    .footer-content {
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
      color: var(--text-muted);
      font-weight: 500;
      font-size: 0.9rem;
      transition: color 0.3s ease;
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
  `;
  document.head.appendChild(style);

  // Scroll to top
  const scrollBtn = footer.querySelector('.scroll-to-top');
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return footer;
}
