import React from "react"
import { Field, reduxForm } from "redux-form"
import { Navigate  } from 'react-router-dom'
import css from './Login.module.scss'

let LoginForm = (props) => {
    return <form className={css.loginForm} onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Enter your email" className={css.inputField} type="text" component='input' name='email'/> <span>Login</span>
        </div> 
        <div>
            <Field placeholder="Enter your password" className={css.inputField} type="password" component='input' name='password'/> <span>Password</span>
        </div>
        <div>
            <Field className={css.checkBoxField} type="checkbox" component='input' name='rememberMe'/> <span>Remember me</span>
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
        <div className={css.loginHeader}>
            <h1>Log in</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsa earum et veritatis ducimus quo perferendis asperior
                es corporis aliquid. Facilis fugit sint hic excepturi, molestias architecto voluptatem nemo assumenda cum qui!       
            </p>    
        </div>
        <LoginForm onSubmit={submitLoginForm}/>
    </>
}

export default Login