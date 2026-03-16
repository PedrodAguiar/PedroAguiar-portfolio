import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-[#0A1217] py-20 px-4 transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />
        <h2 className="font-bold text-4xl text-gray-900 dark:text-white mb-2 font-serif">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Gostou dos projetos? Entre em contato caso queira conversar sobre
          oportunidades ou colaborações!
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/pedro-aguiar-b23a3020b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-green-500/30 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black hover:border-blue-600 dark:hover:border-green-400 transition-all duration-300 hover:-translate-y-1 font-medium text-sm"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href="https://github.com/PedrodAguiar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-green-500/30 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black hover:border-blue-600 dark:hover:border-green-400 transition-all duration-300 hover:-translate-y-1 font-medium text-sm"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
