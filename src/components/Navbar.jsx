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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300 font-serif"
        >
          &lt;Dev /&gt;
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => handleScroll('home')}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600"
          >
            Sobre
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600"
          >
            Projetos
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-b border-gray-200">
          <button
            onClick={() => handleScroll('home')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
          >
            Projetos
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
          >
            Contato
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
