import React from "react"
import { NavLink } from "react-router-dom"
import css from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={css.nav}>
            <NavLink className={css.item} to="/Profile">Profile</NavLink>
            <NavLink className={css.item} to="/Users">Users</NavLink>
            <NavLink className={css.item} to="/Dialogs">Messages</NavLink>
            <NavLink className={css.item} to="/News">News</NavLink>
            <NavLink className={css.item} to="/Settings">Settings</NavLink>
        </nav>
    )
}

export default NavBar