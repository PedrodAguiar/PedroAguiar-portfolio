const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-green-500/30 py-8 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Todos os direitos reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Feito com ❤️ por você
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Desenvolvido com React e Vite
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={handleScrollToTop}
            className="text-gray-500 dark:text-gray-400 font-medium text-sm hover:text-blue-600 dark:hover:text-green-400 transition-colors duration-300"
          >
            ↑ Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
