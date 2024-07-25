import StyledButton from "./Button.style";
interface ButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit' | 'button'
}

const Button = ({ type = 'button', children, primary, onClick, disabled, ...rest }: ButtonProps) => {
    return (
        <StyledButton primary={primary} onClick={onClick} disabled={disabled} type={type} {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;
