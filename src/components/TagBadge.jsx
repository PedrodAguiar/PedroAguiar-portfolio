const TagBadge = ({ children }) => {
  return (
    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-green-400 border border-gray-200 dark:border-green-500/30 rounded-full text-sm font-medium">
      {children}
    </span>
  );
};

export default TagBadge;
