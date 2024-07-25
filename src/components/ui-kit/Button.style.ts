import styled from "styled-components";

interface StyledButtonProps {
    primary?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ primary }) => (primary ? '#007bff' : '#6c757d')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#5a6268')};
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

export default StyledButton;