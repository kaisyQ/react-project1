import React from "react"
import { NavLink } from "react-router-dom"

import styles from './Header.module.scss'
import Button from './../Common/Button/Button'

const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <img src="./logo.png" alt="logo"/>
                <span>Company Logo</span>
            </div>
            {
                isAuth 
                ?   <div className={styles.logout}>
                        <h4>{ login }</h4>
                        <div>
                            <Button onClick={() => { logout() }}>Log out</Button>
                        </div>
                    </div>
                :
                    <Button>
                        <NavLink to='/Login'>Log in</NavLink>
                    </Button>
            }
        </header>
    )
}

export default Header