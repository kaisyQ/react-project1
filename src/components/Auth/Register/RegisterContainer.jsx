import { connect } from "react-redux"

import { Register } from "../../../redux/auth-reducer"
import RegisterComponent from "./Register"


const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    Register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)