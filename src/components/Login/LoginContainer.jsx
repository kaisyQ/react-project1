import { connect } from "react-redux"
import { login } from "../../redux/auth-reducer"
import { getIsAuth } from "../../redux/selectors/app-selector"
import Login from './Login'

let mapStateToProps = (state) => ({ isAuth: getIsAuth(state) })

let mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)