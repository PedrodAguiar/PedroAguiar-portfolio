import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TagBadge from "./TagBadge";

const ExperienceTimelineItem = ({
  title,
  period,
  description,
  tags,
  details,
  icon: Icon,
  isLast = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative pl-10 md:pl-12 ${isLast ? "" : "pb-8 md:pb-10"}`}>
      <div className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-blue-600/20 bg-white text-blue-600 shadow-sm dark:border-green-400/30 dark:bg-[#0A1217] dark:text-green-400">
        <Icon size={16} />
      </div>

      {!isLast && (
        <div className="absolute left-4 top-14 bottom-0 w-px bg-gray-200 dark:bg-green-500/20" />
      )}

      <article className="rounded-xl border border-gray-200 bg-gray-50/80 p-5 shadow-sm transition-all duration-300 hover:border-blue-600 hover:shadow-lg dark:border-green-500/20 dark:bg-gray-900/70 dark:hover:border-green-400 dark:hover:shadow-green-400/10 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-green-400">
              {period}
            </p>
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-green-500/20 dark:text-gray-300 dark:hover:border-green-400 dark:hover:text-green-400"
          >
            {isOpen ? "Ocultar detalhes" : "Ver mais"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBadge key={tag}>{tag}</TagBadge>
          ))}
        </div>

        <div
          className={`grid transition-all duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-green-500/20 dark:bg-[#0A1217]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-green-400">
                Mais detalhes
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {details}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExperienceTimelineItem;
