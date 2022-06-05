import React from "react"
import css from './Header.module.css'

const Header = () => {
    return (
        <header className={css.header}>
            <img src="./logo.png" alt=""/>
            <h1>Social Network</h1>
        </header>
    )
}

export default Header