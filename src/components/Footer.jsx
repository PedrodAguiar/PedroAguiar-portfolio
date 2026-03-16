import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-green-500/30 py-8 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <button
          onClick={handleScrollToTop}
          className="flex items-center justify-center gap-2 mx-auto text-gray-500 dark:text-gray-400 font-medium text-sm hover:text-blue-600 dark:hover:text-green-400 transition-colors duration-300"
        >
          <ArrowUp size={16} />
          Voltar ao topo
        </button>
      </div>
    </footer>
  );
};

export default Footer;
