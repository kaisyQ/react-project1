import { connect } from "react-redux"
import { Login as LoginThnk } from "../../redux/auth-reducer"
import { getIsAuth } from "../../redux/selectors/auth-selector"
import Auth from "./Auth"
import Login from './Login/Login'

let mapStateToProps = (state) => ({ isAuth: getIsAuth(state) })

let mapDispatchToProps = { LoginThnk }

export default connect(mapStateToProps, mapDispatchToProps)(Auth)