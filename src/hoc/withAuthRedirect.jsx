import React from "react"
import { Navigate } from "react-router-dom"


const withAuthRedirectContainer = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/Login' />
        
        return <Component {...props} />
    }
    return RedirectComponent
} 

export default withAuthRedirectContainer