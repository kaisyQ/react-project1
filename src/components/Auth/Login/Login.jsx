import React from "react"
import { Navigate  } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from "../../Common/Button/Button"
import styles from './Login.module.scss'

const Login = ({ isAuth, login }) => {

    const validFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
            rememberMe: false

        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').max(20,'Must be 15 characters or less').required('Required'),
            password: Yup.string().min(8, 'Must be more than 8 characters').max(35, 'Must be 35 characters or less').required('Required'),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password do not match")
        }),
        onSubmit: (values) => {
            login(values.email, values.password, values.rememberMe)
        }
    })

    if (isAuth) return <Navigate to='/Profile' />

    return <>
            <form className={styles.form} onSubmit={validFormik.handleSubmit}>
                <div className={styles.formItem}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name='email'
                        className={styles.inputField}
                        type="text"
                        onChange={validFormik.handleChange}
                        onBlur={validFormik.handleBlur}
                        value={validFormik.values.email}
                    />
                    {validFormik.touched.email && validFormik.errors.email ?
                        <div className={styles.incorrectData}>{validFormik.errors.email}</div> : null}
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name='password'
                        className={styles.inputField}
                        type="password"
                        onChange={validFormik.handleChange}
                        onBlur={validFormik.handleBlur}
                        value={validFormik.values.password}
                    />
                    {validFormik.touched.password && validFormik.errors.password ?
                        <div className={styles.incorrectData}>{validFormik.errors.password}</div> : null}
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                        id="repeatPassword"
                        className={styles.inputField}
                        type="password"
                        name='repeatPassword'
                        onChange={validFormik.handleChange}
                        onBlur={validFormik.handleBlur}
                        value={validFormik.values.repeatPassword}
                    />
                    {validFormik.touched.repeatPassword && validFormik.errors.repeatPassword ?
                        <div className={styles.incorrectData}>{validFormik.errors.repeatPassword}</div> : null}
                </div>
                <div className={styles.formItem}>
                    <div className={styles.checkbox}>
                        <label htmlFor="rememberMe">Remember me</label>
                        <input
                            id="rememberMe"
                            name="rememberMe"
                            className={styles.checkBoxField}
                            type="checkbox"
                            onChange={validFormik.handleChange}
                            value={validFormik.values.rememberMe}
                        />
                    </div>
                </div>
                <div className={styles.formFooter}>
                    <Button type="submit" padding={'10px 50px'}>Log in</Button>
                </div>
            </form>
    </>
}

export default Login