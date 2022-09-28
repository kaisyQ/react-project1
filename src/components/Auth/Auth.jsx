import React from "react"
import { NavLink, Route, Routes, Navigate } from "react-router-dom"
import styles from "./Auth.module.scss"
import Button from "../Common/Button/Button"
import LoginContainer from "./Login/LoginContainer"
import Register from "./Register/Register"

const Auth = ({ isAuth }) => {

    if (isAuth) return <Navigate to='/Profile' />

    return <>
        <div className={styles.auth}>
            <div className={styles.authButtons}>
                <NavLink to='Login'><Button padding={'10px 20px'}>Sign in</Button></NavLink>
                <NavLink to='Register'><Button padding={'10px 20px'}>Sign up</Button></NavLink>
            </div>
            <Routes>
                {
                    ['/', '/Login']
                        .map(route => <Route path={route} element={ <LoginContainer/> }/>)
                }
                <Route path="Register" element={ <Register /> }/>
            </Routes>
        </div>
    </>
}

export default Auth