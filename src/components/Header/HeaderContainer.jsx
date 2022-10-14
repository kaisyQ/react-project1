import { connect } from "react-redux"

import { logoutThunk as logout } from '../../redux/auth-reducer'
import { getFirstname, getIsAuth, getLastname } from "../../redux/selectors/auth-selector"

import Header from "./Header"

const mapStateToProps = (state) => ({ isAuth: getIsAuth(state),  firstname: getFirstname(state), lastname: getLastname(state) })

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Header)

