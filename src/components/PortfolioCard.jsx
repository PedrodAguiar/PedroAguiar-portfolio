import TagBadge from "./TagBadge";

const PortfolioCard = ({
  title,
  description,
  tags = [],
  details = [],
  action,
  icon: Icon,
  animationDelay = 0,
}) => {
  return (
    <article
      className="flex flex-col bg-white dark:bg-[#0A1217] border border-gray-200 dark:border-green-500/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-600 dark:hover:border-green-400 hover:shadow-lg dark:hover:shadow-green-400/20 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        {Icon ? (
          <Icon size={80} className="text-blue-600 dark:text-green-400" />
        ) : null}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 font-serif">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {description}
        </p>

        {details.length > 0 && (
          <dl className="space-y-3 mb-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-green-500/20 p-3"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-green-400 mb-1">
                  {detail.label}
                </dt>
                <dd className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
        )}

        {action ? (
          <div className="flex gap-2 mt-auto">
            <a
              href={action.href}
              target={action.target ?? "_blank"}
              rel={action.rel ?? "noopener noreferrer"}
              className="flex-1 px-4 py-2 border-2 border-blue-600 dark:border-green-400 text-blue-600 dark:text-green-400 font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all duration-300 text-center text-sm"
            >
              {action.label}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default PortfolioCard;
