import React from "react"
import { Navigate } from "react-router-dom"


const withAuthRedirectContainer = (Component) => {
    const RedirectComponent = (props) => {
        debugger
        if (!props.isAuth) { return <Navigate to='/Login' /> }
        else { return <Component {...props} />}
    }
    return RedirectComponent
} 

export default withAuthRedirectContainer