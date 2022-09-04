import React from "react"
import { NavLink } from "react-router-dom"
import css from './NavBar.module.scss'

const NavBar = () => {
    return <>
        <nav className={css.nav}>
            <div className={css.navItem}><NavLink to="/Profile">Profile</NavLink></div>
            <div className={css.navItem}><NavLink to="/Users">Users</NavLink></div>
            <div className={css.navItem}><NavLink to="/Dialogs">Messages</NavLink></div>
            <div className={css.navItem}><NavLink to="/News">News</NavLink></div>
            <div className={css.navItem}><NavLink to="/Settings">Settings</NavLink></div>
        </nav>
    </>
}

export default NavBar