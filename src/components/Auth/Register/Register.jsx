import React from "react"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../Common/Button/Button'
import styles from '../Login/Login.module.scss'
import Edit from '../../Common/EditButton/EditButton'

const Register = ({ Register }) => {

    const validFormik = useFormik({
        initialValues: {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').max(30,'Must be 30 characters or less').required('Required'),
            firstname: Yup.string().min(3, 'Username is too short').max(20, 'Must be 20 characters or less').required('Required'),
            password: Yup.string().min(8, 'Must be more than 8 characters').max(35, 'Must be 35 characters or less').required('Required'),
            lastname: Yup.string().min(3, 'Username is too short').max(20, 'Must be 20 characters or less').required('Required'),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password do not match")
        }),
        onSubmit: (values) => {
            Register({ values })
        }
    })

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
                    <label htmlFor="firstname">Firstname</label>
                    <input
                        id="firstname"
                        name='firstname'
                        className={styles.inputField}
                        type="text"
                        onChange={validFormik.handleChange}
                        onBlur={validFormik.handleBlur}
                        value={validFormik.values.firstname}
                    />
                    {validFormik.touched.firstname && validFormik.errors.firstname ?
                        <div className={styles.incorrectData}>{validFormik.errors.firstname}</div> : null}
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        id="lastname"
                        name='lastname'
                        className={styles.inputField}
                        type="text"
                        onChange={validFormik.handleChange}
                        onBlur={validFormik.handleBlur}
                        value={validFormik.values.lastname}
                    />
                    {validFormik.touched.lastname && validFormik.errors.lastname ?
                        <div className={styles.incorrectData}>{validFormik.errors.lastname}</div> : null}
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

