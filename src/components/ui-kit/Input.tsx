import StyledInput from "./Input.style";
interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    id?: string;
    name?: string;
}

const Input = ({ placeholder, value, onChange, ...rest }: InputProps) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
