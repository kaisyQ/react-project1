import React from "react"
import { NavLink } from "react-router-dom"

import css from './Header.module.scss'
import Button from './../Common/Button/Button'

const Header = ({isAuth, login, logout}) => {
    const logoutBtnClick = () => {
        logout()
    }

    return (
        <header className={css.header}>
            <div className={css.headerLogo}>
                <img src="./logo.png" alt="logo"/>
                <span>Company Logo</span>
            </div>
            {
                isAuth 
                ?   <div className={css.logout}>
                        <h4>{login}</h4>
                        <div>
                            <Button onClick={logoutBtnClick}>Log out</Button>
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