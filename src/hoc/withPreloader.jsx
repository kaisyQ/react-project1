import React from "react"
import Preloader from "../components/Common/Preloader/Preloader"

const WithPreloader = (Component) => {
    const PreloaderComponent = (props) => {
        if (props.isFetching) return <Preloader />
        return <Component {...props} />
    }
    return PreloaderComponent
}

export default WithPreloader