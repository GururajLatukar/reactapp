import StyledLoginForm from "./LoginForm.style"
import Button from "./ui-kit/Button"
import Input from "./ui-kit/Input"

export const LoginForm = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        alert("Login in module is under contruction!!")
    }

    return (
        <StyledLoginForm>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <Input name="username" id="username" />
                <label className="mt5" htmlFor="password">Password</label>
                <Input name="password" id="password" />
                <Button type="submit">Login</Button>
            </form>
        </StyledLoginForm>
    )
}

export default LoginForm;