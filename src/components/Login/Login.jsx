import React from "react"


const Login = () => {
    return  <>
        <h1>Login</h1>
        <LoginForm />
    </>
}

const LoginForm = () => {
    return <form>
        <div>
            <input type="text" /> Login
        </div>
        <div>
            <input type="password"/ > Password
        </div>
        <div>
            <input type="checkbox"/> Remember me
        </div>
        <button>Log in</button>
    </form>
}


export default Login