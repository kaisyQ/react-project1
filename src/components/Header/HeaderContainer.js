import { connect } from "react-redux"

import { logout } from '../../redux/auth-reducer'

import Header from "./Header"

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth, 
        email: state.app.email,
        login: state.app.login
    }
}
const mapDispatchToProps = {
    logout
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer

