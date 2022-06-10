import React from "react"

import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import Profile from "./Profile"

import { setProfileThunk, setProfileStatusThunk, updateCurrentUserProfileStatus } from './../../redux/profile-reducer'

class ProfileAPIContainer extends React.Component {

    componentDidMount () {
        this.props.setProfileThunk(this.props.userId)
        this.props.setProfileStatusThunk(this.props.userId)
    }

    render () {
        return  <Profile updateCurrentUserProfileStatus={this.props.updateCurrentUserProfileStatus}
                    profileInfo={this.props.profile} 
                    status={this.props.status}
                />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.postPageData.profile,
        status: state.postPageData.status
    }
}

const mapDispatchToProps = {
    setProfileThunk,
    setProfileStatusThunk,
    updateCurrentUserProfileStatus
}

const WithRouterProfileContainer = (props) => {
    const { id } = useParams()
    return <>
        <ProfileAPIContainer {...props} userId={id}/>
    </>
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileContainer)

export default ProfileContainer

