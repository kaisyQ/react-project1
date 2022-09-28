import { connect } from "react-redux"
import { Login as login} from "../../../redux/auth-reducer"
import Login from "./Login"

const mapDispatchToProps = { login }

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)