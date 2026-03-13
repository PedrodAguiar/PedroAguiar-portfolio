import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0A1217] border-b border-gray-200 dark:border-green-500/30 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-2xl font-bold text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-300 transition-colors duration-300 font-serif"
        >
          &lt;Dev /&gt;
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => handleScroll('home')}
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-green-400 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-green-400"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-green-400 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-green-400"
          >
            Sobre
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-green-400 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-green-400"
          >
            Projetos
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-green-400 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-green-400"
          >
            Contato
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="text-gray-700 dark:text-green-400 hover:text-blue-600 dark:hover:text-green-300 transition-colors duration-300 p-2"
          title="Alternar modo escuro"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-[#0A1217] border-b border-gray-200 dark:border-green-500/30 transition-colors duration-300">
          <button
            onClick={() => handleScroll('home')}
            className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors duration-300"
          >
            Sobre
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors duration-300"
          >
            Projetos
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors duration-300"
          >
            Contato
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
