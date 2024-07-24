import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin: 10px 0;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

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
