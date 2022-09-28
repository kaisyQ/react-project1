import React from "react"
import { Navigate  } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from "../../Common/Button/Button"
import styles from './Login.module.scss'
 
const Login = ({ isAuth, login }) => {
  
    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
            rememberMe: false

        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').max(20,'Must be 15 characters or less').required('Required'),
            password: Yup.string().min(8, 'Must be more than 8 characters').max(35, 'Must be 35 characters or less').required('Required'),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], "Does not match with Password!")
        }),
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