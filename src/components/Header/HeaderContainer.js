import { connect } from "react-redux"

import { isAuthThunk } from '../../redux/auth-reducer'

import Header from "./Header"

const mapStateToProps = (state) => {
    return {
        authData: state.auth
    }
}
const mapDispatchToProps = {
    isAuthThunk
}

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer

