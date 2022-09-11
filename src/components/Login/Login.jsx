import React from "react"
import { Navigate  } from 'react-router-dom'
import Button from "../Common/Button/Button"
import styles from './Login.module.scss'
import { useFormik } from 'formik';
 
const Login = ({ isAuth, login }) => {
  
    const validate = values => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required';
        } else if (values.email.length > 20) {
            errors.email = 'Must be 15 characters or less';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Must be more than 8 characters';
        }

        if (!values.repeatPassword) {
            errors.repeatPassword = 'Required';
        } else if (values.repeatPassword !== values.password) {
            errors.repeatPassword = 'Passwords are not equal';
        }
        return errors
    }
    

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
            rememberMe: false

        },
        validate,
        onSubmit: (values) => {
            login(values.email, values.password, values.rememberMe)
        }
    })

    if (isAuth) return <Navigate to='/Profile' /> 

    return <form className={styles.loginForm} onSubmit={loginFormik.handleSubmit}>
        <div className={styles.loginFormItems}>
            <div className={styles.loginFormItem}>
                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    name='email'
                    placeholder="Enter your email"
                    className={styles.inputField} 
                    type="text"
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    value={loginFormik.values.email}
                /> 
                {loginFormik.touched.email && loginFormik.errors.email ? 
                    <div>{loginFormik.errors.email}</div> : null}
            </div> 
            <div className={styles.loginFormItem}>
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    name='password'
                    placeholder="Enter your password" 
                    className={styles.inputField} 
                    type="password"
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    value={loginFormik.values.password}
                />
                {loginFormik.touched.password && loginFormik.errors.password ? 
                    <div>{loginFormik.errors.password}</div> : null}
            </div>
            <div className={styles.loginFormItem}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input 
                    id="repeatPassword" 
                    placeholder="Repeat your password" 
                    className={styles.inputField} 
                    type="password" 
                    name='repeatPassword'
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    value={loginFormik.values.repeatPassword}
                />
                {loginFormik.touched.repeatPassword && loginFormik.errors.repeatPassword ? 
                    <div>{loginFormik.errors.repeatPassword}</div> : null}
            </div>
            <div className={styles.loginFormItem}>
                <div className={styles.checkbox}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <input 
                        id="rememberMe"
                        name="rememberMe"
                        className={styles.checkBoxField} 
                        type="checkbox"
                        onChange={loginFormik.handleChange}
                        value={loginFormik.values.rememberMe}
                    />
                </div>
            </div>
        </div>
        <Button type="submit">Log in</Button>
    </form>
}

export default Login