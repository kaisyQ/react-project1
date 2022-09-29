import React from "react"
import { Navigate  } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../Common/Button/Button'
import styles from '../Login/Login.module.scss'
import Edit from '../../Common/EditButton/EditButton'

const Register = ({isRegistered, registered}) => {

    const validFormik = useFormik({
        initialValues: {
            email: '',
            userName: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').max(20,'Must be 15 characters or less').required('Required'),
            userName: Yup.string().min(3, 'Username is too short').max(20, 'Must be 20 characters or less').required('Required'),
            password: Yup.string().min(8, 'Must be more than 8 characters').max(35, 'Must be 35 characters or less').required('Required'),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password do not match")
        }),
        onSubmit: (values) => {
            registered(values.email, values.userName, values.password, values.rememberMe)
        }
    })

    if (isRegistered) return <Navigate to='/Profile' />

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
                    <label htmlFor="userName">
                        Username
                        <Edit></Edit>
                    </label>
                    <input
                        id="userName"
                        name='userName'
                        className={styles.inputField}
                        type="text"
                        onChange={validFormik.handleChange}
                        onBlur={validFormik.handleBlur}
                        value={validFormik.values.userName}
                    />
                    {validFormik.touched.userName && validFormik.errors.userName ?
                        <div className={styles.incorrectData}>{validFormik.errors.userName}</div> : null}
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
                <div className={styles.formFooter}>
                    <Button type="submit" padding={'10px 50px'}>Create account</Button>
                </div>
            </form>
    </>
}

export default Register