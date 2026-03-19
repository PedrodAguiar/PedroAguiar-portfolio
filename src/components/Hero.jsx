import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { contactData, emailHref, whatsappHref } from "../data/contactData";

const primaryButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5";
const secondaryButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-green-400 dark:hover:text-green-400";
const iconLinkClasses =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-green-400 dark:hover:text-green-400";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-white px-4 pb-16 pt-24 transition-colors duration-300 dark:bg-[#0A1217]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,440px)]">
        <div className="animate-fade-in-up">
          

          <div className="mb-6 h-1 w-12 rounded-full bg-blue-600 dark:bg-green-400" />

          <h1 className="mb-3 max-w-3xl font-serif text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
            Ola, sou{" "}
            <span className="text-blue-600 dark:text-green-400">
              {contactData.name}
            </span>
          </h1>

          <p className="mb-4 text-2xl font-medium text-gray-600 dark:text-gray-300">
            {contactData.role}
          </p>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Desenvolvedor front-end focado em criar interfaces modernas,
            responsivas e intuitivas. Se a ideia for tirar um projeto do papel
            ou evoluir um produto, o contato principal agora fica visivel ja no
            Hero.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className={`${primaryButtonClasses} bg-blue-600 text-white hover:bg-blue-700 dark:bg-green-400 dark:text-black dark:hover:bg-green-300`}
            >
              Ver projetos
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

        <div className="animate-fade-in-up">
          <div className="relative mx-auto flex max-w-md justify-center">
            <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-blue-600/15 blur-3xl dark:bg-green-500/10" />
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-white via-blue-50 to-gray-100 p-6 shadow-2xl shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-200/70 dark:border-green-500/20 dark:from-[#0E171D] dark:via-[#101E26] dark:to-[#0A1217] dark:shadow-green-900/20">
              <div className="relative mx-auto mb-6 h-72 w-72 overflow-hidden rounded-[1.75rem] border-4 border-blue-600/80 bg-white shadow-xl dark:border-green-400">
                <img
                  src="https://avatars.githubusercontent.com/u/88543151?v=4"
                  alt="Foto de Pedro Aguiar"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="rounded-2xl border border-white/60 bg-white/80 p-5 text-center backdrop-blur-sm dark:border-green-500/10 dark:bg-black/20">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
                  Canal principal
                </p>
                <a
                  href={emailHref}
                  className="mt-2 flex items-center justify-center gap-3 text-base font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600 dark:text-white dark:hover:text-green-400"
                >
                  <Mail size={18} />
                  {contactData.email}
                </a>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className={iconLinkClasses}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className={iconLinkClasses}
                  >
                    <Github size={18} />
                  </a>
                  {whatsappHref ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      title="WhatsApp"
                      className={iconLinkClasses}
                    >
                      <MessageCircle size={18} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-label="WhatsApp indisponivel"
                      title="Adicione seu numero em src/data/contactData.js para ativar o link direto do WhatsApp."
                      className={`${iconLinkClasses} cursor-not-allowed opacity-60`}
                    >
                      <MessageCircle size={18} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-3xl border-2 border-blue-600/40 dark:border-green-400/40" />
            <div className="absolute -left-4 top-12 h-16 w-16 rounded-full border-2 border-blue-600/30 dark:border-green-400/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
