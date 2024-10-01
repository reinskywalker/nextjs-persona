const Subtitle = ({ children, className }) => (
    <h3 className={`text-2xl md:text-3xl text-gray-800 dark:text-gray-400 ${className}`}>
        {children}
    </h3>
);

export default Subtitle;