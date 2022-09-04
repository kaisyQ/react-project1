import React from "react"
import { NavLink } from "react-router-dom"

import css from './Header.module.scss'

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
                        <span>{props.login}</span>
                        <div>
                            <button onClick={logoutBtnClick}>Log out</button>
                        </div>
                    </div>
                :
                    <button className="btn">
                        <NavLink to='/Login'>Log in</NavLink>
                    </button>
            }
        </header>
    )
}

export default Header