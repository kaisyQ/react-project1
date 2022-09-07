import React from "react"
import { Field, reduxForm } from "redux-form"
import { Navigate  } from 'react-router-dom'
import Button from "../Common/Button/Button"
import css from './Login.module.scss'

let LoginForm = (props) => {
    return <form className={css.loginForm} onSubmit={props.handleSubmit}>
        <div className={css.loginFormItems}>
            <div className={css.loginFormItem}>
                <label htmlFor="email">Email</label>
                <Field id="email" placeholder="Enter your email" className={css.inputField} type="text" component='input' name='email'/> 
            </div> 
            <div className={css.loginFormItem}>
                <label htmlFor="password">Password</label>
                <Field id="password" placeholder="Enter your password" className={css.inputField} type="password" component='input' name='password'/>
            </div>
            <div className={css.loginFormItem}>
                <label htmlFor="repeat-password">Repeat Password</label>
                <Field id="repeat-password" placeholder="Repeat your password" className={css.inputField} type="password" component='input' name='repeat-password'/>
            </div>
            <div className={css.loginFormItem}>
                <div className={css.checkbox}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field id="rememberMe" className={css.checkBoxField} type="checkbox" component='input' name='rememberMe'/>
                </div>
            </div>
        </div>
        <Button>Log in</Button>
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
        <div className={css.loginFormContainer}>
            <LoginForm onSubmit={submitLoginForm}/>
        </div>
    </>
}

export default Login