import './Button.scss'


interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant?: string;
    size?: string;
    children?: React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size,
    children,
    onClick,
    ...props
}) => {
    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    );
};

export default Button