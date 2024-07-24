import styled from "styled-components";
import Button from "./ui-kit/Button"
import Input from "./ui-kit/Input"

const StyledHeader = styled.h2`
  text-align: center;
`;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 22vh auto;
`;

export const LoginForm = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        alert("Login module is under construction!!")
    }

    return (
        <StyledLogin>
            <StyledHeader>Login</StyledHeader>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <Input name="username" id="username" />
                <label className="mt5" htmlFor="password">Password</label>
                <Input name="password" id="password" />
                <Button type="submit">Login</Button>
            </form>
        </StyledLogin>
    )
}

export default LoginForm;