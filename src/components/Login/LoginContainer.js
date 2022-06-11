import React from "react"

import { connect } from "react-redux"
import { login } from "../../redux/auth-reducer"

import Login from './Login'

let mapStateToProps = (state) => { return {
    isAuth: state.auth.isAuth
} }

let mapDispatchToProps = {
    login
}

let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer