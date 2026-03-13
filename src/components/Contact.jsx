import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Obrigado pela mensagem! Em breve retornaremos.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <style>{`
        .contact {
          background-color: var(--card-bg);
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .contact-header .accent-line {
          margin: 0 auto 1rem;
          height: 4px;
          width: 48px;
          background-color: var(--primary);
          border-radius: 9999px;
        }

        .contact-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-display);
          font-weight: 700;
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
          font-family: var(--font-display);
          font-weight: 700;
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
          cursor: pointer;
          text-decoration: none;
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
          padding: 0 1rem;
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
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-body);
          background-color: var(--primary);
          color: var(--background);
        }

        .contact-form button:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
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
      `}</style>

      <section className="contact" id="contact" style={{ padding: '80px 0' }}>
        <div className="contact-header">
          <div className="accent-line"></div>
          <h2>Vamos Trabalhar Juntos?</h2>
          <p>Tenho interesse em oportunidades de freelance e projetos interessantes. Sinta-se à vontade para entrar em contato comigo!</p>
        </div>

        <div className="contact-social">
          <h3>Conecte-se Comigo</h3>
          <div className="social-links">
            <a href="mailto:seu.email@exemplo.com" className="social-icon" title="Email">📧</a>
            <a href="#" className="social-icon" title="LinkedIn">💼</a>
            <a href="#" className="social-icon" title="GitHub">💻</a>
            <a href="#" className="social-icon" title="Twitter">🐦</a>
          </div>
        </div>

        <div className="contact-divider">
          <div className="divider-line"></div>
          <span>ou</span>
          <div className="divider-line"></div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>
    </>
  )
}

export default Contact
