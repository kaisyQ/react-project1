import React from "react"
import { Field, reduxForm } from "redux-form"
import { Navigate  } from 'react-router-dom'
import Button from "../Common/Button/Button"
import styles from './Login.module.scss'

let LoginForm = ({ handleSubmit }) => {
    return <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.loginFormItems}>
            <div className={styles.loginFormItem}>
                <label htmlFor="email">Email</label>
                <Field id="email" placeholder="Enter your email" className={styles.inputField} type="text" component='input' name='email'/> 
            </div> 
            <div className={styles.loginFormItem}>
                <label htmlFor="password">Password</label>
                <Field id="password" placeholder="Enter your password" className={styles.inputField} type="password" component='input' name='password'/>
            </div>
            <div className={styles.loginFormItem}>
                <label htmlFor="repeat-password">Repeat Password</label>
                <Field id="repeat-password" placeholder="Repeat your password" className={styles.inputField} type="password" component='input' name='repeat-password'/>
            </div>
            <div className={styles.loginFormItem}>
                <div className={styles.checkbox}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field id="rememberMe" className={styles.checkBoxField} type="checkbox" component='input' name='rememberMe'/>
                </div>
            </div>
        </div>
        <Button>Log in</Button>
    </form>
}
LoginForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = ({ isAuth, login }) => {

    if (isAuth) return <Navigate to='/Profile' /> 
    
    const submitLoginForm = (values) => {
        login(values.email, values.password, values.rememberMe)
    }

    return  <>
        <div className={styles.loginFormContainer}>
            <LoginForm onSubmit={submitLoginForm}/>
        </div>
    </>
}

export default Login