import React from "react"
import { Field, reduxForm } from "redux-form"
import { Navigate  } from 'react-router-dom'

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" component='input' name='email'/> Login
        </div>
        <div>
            <Field type="password" component='input' name='password'/> Password
        </div>
        <div>
            <Field type="checkbox" component='input' name='rememberMe'/> Remember me
        </div>
        <button>Log in</button>
    </form>
}
LoginForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = (props) => {

    if (props.isAuth) {
        return <Navigate to='/Profile' /> 
    }

    const submitLoginForm = (values) => {
        props.login(values.email, values.password, values.rememberMe)
    }

    return  <>
        <h1>Log in</h1>
        <LoginForm onSubmit={submitLoginForm}/>
    </>
}

export default Login