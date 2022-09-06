import React from "react"
import { NavLink } from "react-router-dom"

import css from './Header.module.scss'
import Button from './../Common/Button/Button'

const Header = (props) => {
    const logoutBtnClick = () => {
        props.logout()
    }

    return (
        <header className={css.header}>
            <div className={css.headerLogo}>
                <img src="./logo.png" alt="logo"/>
                <span>Company Logo</span>
            </div>
            {
                props.isAuth 
                ?   <div className={css.logout}>
                        <h4>{props.login}</h4>
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