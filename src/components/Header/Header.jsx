import React from "react"
import { NavLink } from "react-router-dom"

import css from './Header.module.css'

const Header = (props) => {
    const logoutBtnClick = () => {
        props.logout()
    }

    return (
        <header className={css.header}>
            <img src="./logo.png" alt=""/>
            <h1>Social Network</h1>
            {
                props.isAuth 
                ?   <div>
                        <span>{props.login}</span>
                        <div>
                            <button onClick={logoutBtnClick}>Log out</button>
                        </div>
                    </div>
                :
                    <NavLink to='/Login'>Log in</NavLink>
            }
        </header>
    )
}

export default Header