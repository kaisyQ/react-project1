import React from "react"

import css from './Header.module.css'

const Header = (props) => {
    const checkLogin = () => {
        props.isAuthThunk()
    }

    const logoutBtnClick = () => {
        props.logout()
    }

    return (
        <header className={css.header}>
            <img src="./logo.png" alt=""/>
            <h1>Social Network</h1>
            {
                props.authData.isAuth 
                ?   <div>
                        <span>{props.authData.userData.data.login}</span>
                        <div>
                            <button onClick={logoutBtnClick}>Log out</button>
                        </div>
                    </div>
                :
                    <button onClick={checkLogin}>Log in</button>
            }
        </header>
    )
}

export default Header