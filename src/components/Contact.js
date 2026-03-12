export function createContact() {
  const contact = document.createElement('section');
  contact.id = 'contact';
  contact.className = 'contact';
  contact.innerHTML = `
    <div class="container contact-content">
      <div class="contact-header animate-fadeInUp">
        <div class="accent-line"></div>
        <h2>Vamos Trabalhar Juntos?</h2>
        <p>Tenho interesse em oportunidades de freelance e projetos interessantes. Sinta-se à vontade para entrar em contato comigo!</p>
      </div>

      <div class="contact-social">
        <h3>Conecte-se Comigo</h3>
        <div class="social-links">
          <a href="mailto:seu.email@exemplo.com" class="social-icon" title="Email">📧</a>
          <a href="#" class="social-icon" title="LinkedIn">💼</a>
          <a href="#" class="social-icon" title="GitHub">💻</a>
          <a href="#" class="social-icon" title="Twitter">🐦</a>
        </div>
      </div>

      <div class="contact-divider">
        <div class="divider-line"></div>
        <span>ou</span>
        <div class="divider-line"></div>
      </div>

      <form class="contact-form animate-slideInUp">
        <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group full-width">
          <label for="message">Mensagem</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
      </form>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .contact {
      background-color: var(--card-bg);
    }

    .contact-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .contact-header .accent-line {
      margin: 0 auto 1rem;
    }

    .contact-header h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .contact-header p {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-social {
      text-align: center;
      margin-bottom: 2rem;
    }

    .contact-social h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--background);
      border: 1px solid var(--border);
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background-color: var(--primary);
      border-color: var(--primary);
      transform: translateY(-4px);
    }

    .contact-divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
      justify-content: center;
    }

    .divider-line {
      flex: 1;
      height: 1px;
      background-color: var(--border);
      max-width: 200px;
    }

    .contact-divider span {
      color: var(--text-muted);
      font-weight: 500;
    }

    .contact-form {
      max-width: 600px;
      margin: 2rem auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    .form-group label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text);
    }

    .form-group input,
    .form-group textarea {
      padding: 0.75rem;
      background-color: var(--background);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text);
      font-family: var(--font-body);
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(0, 237, 100, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 150px;
    }

    .contact-form button {
      grid-column: 1 / -1;
    }

    @media (max-width: 768px) {
      .contact-header h2 {
        font-size: 2rem;
      }

      .contact-form {
        grid-template-columns: 1fr;
      }

      .form-group.full-width {
        grid-column: 1;
      }
    }
  `;
  document.head.appendChild(style);

  // Form submission
  const form = contact.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pela mensagem! Em breve retornaremos.');
    form.reset();
  });

  return contact;
}
