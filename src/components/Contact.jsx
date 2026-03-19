import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contactData, emailHref, whatsappHref } from "../data/contactData";

const actionClasses =
  "flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white px-4 py-20 transition-colors duration-300 dark:bg-[#0A1217]"
    >
      <div className="mb-12 text-center animate-fade-in-up">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />
        <h2 className="mb-2 font-serif text-4xl font-bold text-gray-900 dark:text-white">
          Vamos trabalhar juntos?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400">
          Gostou dos projetos? Entre em contato para conversar sobre
          oportunidades, freelas e colaboracoes.
        </p>
      </div>

      <div className="mb-6 text-center">
        <a
          href={emailHref}
          className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600 dark:text-white dark:hover:text-green-400"
        >
          <Mail size={20} />
          {contactData.email}
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={emailHref}
          className={`${actionClasses} border-blue-600 bg-blue-600 text-white hover:bg-blue-700 dark:border-green-400 dark:bg-green-400 dark:text-black dark:hover:bg-green-300`}
        >
          <Mail size={18} />
          E-mail
        </a>

        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionClasses} border-gray-200 bg-gray-100 text-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-500/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-green-400 dark:hover:bg-green-400 dark:hover:text-black`}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        ) : (
          <button
            type="button"
            disabled
            className={`${actionClasses} cursor-not-allowed border-gray-200 bg-gray-100 text-gray-700 opacity-60 dark:border-green-500/30 dark:bg-gray-800 dark:text-gray-300`}
            title="Adicione seu numero em src/data/contactData.js para ativar o link direto do WhatsApp."
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
        )}

        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionClasses} border-gray-200 bg-gray-100 text-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-500/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-green-400 dark:hover:bg-green-400 dark:hover:text-black`}
        >
          <Linkedin size={18} />
          LinkedIn
        </a>

        <a
          href={contactData.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionClasses} border-gray-200 bg-gray-100 text-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-green-500/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-green-400 dark:hover:bg-green-400 dark:hover:text-black`}
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
