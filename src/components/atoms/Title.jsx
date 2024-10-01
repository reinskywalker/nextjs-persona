const Title = ({ children, className }) => (
    <h2 className={`text-5xl py-2 text-gray-500 dark:text-silver font-bold md:text-6xl ${className}`}>
        {children}
    </h2>
);

export default Title;