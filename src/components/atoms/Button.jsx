const Button = ({ onClick, children, className }) => (
    <button onClick={onClick} className={className}>
        {children}
    </button>
);

export default Button;