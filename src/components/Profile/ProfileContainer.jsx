import React from "react"

import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import Profile from "./Profile"

import { setProfileThunk } from './../../redux/profile-reducer'

class ProfileAPIContainer extends React.Component {

    componentDidMount () {
        this.props.setProfileThunk(this.props.userId)
    }

    render () {
        return <Profile profileInfo={this.props.profile} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.postPageData.profile
    }
}

const mapDispatchToProps = {
    setProfileThunk
}

const WithRouterProfileContainer = (props) => {
    const { id } = useParams()
    return <>
        <ProfileAPIContainer {...props} userId={id}/>
    </>
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileContainer)

export default ProfileContainer

