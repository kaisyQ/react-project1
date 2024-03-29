import React from "react"
import { NavLink } from "react-router-dom"

import styles from './Header.module.scss'
import Button from './../Common/Button/Button'

const Header = ({ isAuth, firstname, lastname, logout }) => {
    return <>
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <img src="./logo.png" alt="logo"/>
                <span>Company Logo</span>
            </div>
            {
                isAuth 
                ?   <div className={styles.logout}>
                        <h4>{`${firstname}__${lastname}`}</h4>
                        <div>
                            <Button onClick={() => { logout() }}>Log out</Button>
                        </div>
                    </div>
                :
                    <Button>
                        <NavLink to='/Auth'>Log in</NavLink>
                    </Button>
            }
        </header>
    </>
}

export default Header