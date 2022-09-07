import { connect } from "react-redux"

import { logout } from '../../redux/auth-reducer'
import { getIsAuth, getLogin } from "../../redux/selectors/app-selector"

import Header from "./Header"

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state), 
    login: getLogin(state)
})

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Header)

