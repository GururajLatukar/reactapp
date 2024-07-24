import styled from "styled-components";
import Button from "./ui-kit/Button"
import Input from "./ui-kit/Input"

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 22vh auto;
  
  h2 {
    text-align: center;
  }
`;

export const LoginForm = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        alert("Login in module is under contruction!!")
    }

    return (
        <StyledLogin>
            <div>
                <h2>Login v3</h2>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username">Username</label>
                    <Input name="username" id="username" />
                    <label className="mt5" htmlFor="password">Password</label>
                    <Input name="password" id="password" />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </StyledLogin>
    )
}

export default LoginForm;