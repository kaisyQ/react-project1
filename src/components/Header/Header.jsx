import React from "react"

import { Navigate  } from 'react-router-dom'

import css from './Header.module.css'

const Header = (props) => {
    const checkLogin = () => {
        props.isAuthThunk()
    }
    //if ( !props.authData.isAuth ) {
    //    return <Navigate to={'/Users'}/>
    //}
    return (
        <header className={css.header}>
            <img src="./logo.png" alt=""/>
            <h1>Social Network</h1>
            {
                props.authData.isAuth 
                ? 
                    <span>{props.authData.userData.data.login}</span>
                :
                    <button onClick={checkLogin} >Log in</button>
            }
        </header>
    )
}

export default Header