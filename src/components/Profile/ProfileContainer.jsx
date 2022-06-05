import React from "react"
import axios from "axios"

import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import Profile from "./Profile"

import {setProfileActionCreater} from './../../redux/profile-reducer'

class ProfileAPIContainer extends React.Component {

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`).then(response => {
            this.props.setProfile(response.data)
        })
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

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => { dispatch(setProfileActionCreater(profile)) }
    }
}

const WithRouterProfileContainer = (props) => {
    const { id } = useParams()
    return <>
        <ProfileAPIContainer {...props} userId={id}/>
    </>
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileContainer)

export default ProfileContainer

