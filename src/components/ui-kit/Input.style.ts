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

export default StyledInput