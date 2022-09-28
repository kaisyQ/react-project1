import React from "react"
import { Navigate } from "react-router-dom"


const withAuthRedirectContainer = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/Auth' />
        
        return <Component {...props} />
    }
    return RedirectComponent
} 

export default withAuthRedirectContainer