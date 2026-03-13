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
    <section id="contact" className="bg-white py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600" />
        <h2 className="font-bold text-4xl text-gray-900 mb-2 font-serif">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Tenho interesse em oportunidades de freelance e projetos interessantes. Sinta-se à vontade para entrar em contato comigo!
        </p>
      </div>

      {/* Social Links */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-2xl text-gray-900 mb-6 font-serif">
          Conecte-se Comigo
        </h3>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:seu.email@exemplo.com"
            className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            title="Email"
          >
            📧
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            title="LinkedIn"
          >
            💼
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            title="GitHub"
          >
            💻
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            title="Twitter"
          >
            🐦
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 justify-center mb-8 max-w-md mx-auto">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-gray-500 font-medium">ou</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-900 mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block font-semibold text-gray-900 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  )
}

export default Contact
