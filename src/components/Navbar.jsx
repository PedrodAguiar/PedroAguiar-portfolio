import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "experience", label: "Experi\u00eancia" },
  { id: "contact", label: "Contato" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0A1217] border-b border-gray-200 dark:border-green-500/30 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 gap-4">
        <button
          onClick={handleLogoClick}
          className="text-2xl font-bold text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-300 transition-colors duration-300 font-serif"
        >
          &lt;Dev /&gt;
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-green-400 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-green-400"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="text-gray-700 dark:text-green-400 hover:text-blue-600 dark:hover:text-green-300 transition-colors duration-300 p-2"
          title="Alternar modo escuro"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          aria-label="Abrir menu"
        >
          {"\u2630"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-[#0A1217] border-b border-gray-200 dark:border-green-500/30 transition-colors duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
