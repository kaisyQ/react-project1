import React from "react"
import { NavLink } from "react-router-dom"
import css from './NavBar.module.scss'

const NavBar = () => {
    return <>
        <nav className={css.nav}>
            <NavLink to="/Profile"><div className={css.navItem}>Profile</div></NavLink>
            <NavLink to="/Users"><div className={css.navItem}>Users</div></NavLink>
            <NavLink to="/Dialogs"><div className={css.navItem}>Messages</div></NavLink>
            <NavLink to="/News"><div className={css.navItem}>News</div></NavLink>
            <NavLink to="/Settings"><div className={css.navItem}>Settings</div></NavLink>
        </nav>
    </>
}

export default NavBar