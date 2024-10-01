const Heading = ({ level = 1, children, className }) => {
    const Tag = `h${level}`;
    return <Tag className={`text-2xl font-bold ${className}`}>{children}</Tag>;
};

export default Heading;
