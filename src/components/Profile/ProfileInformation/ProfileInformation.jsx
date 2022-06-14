import React from "react"
import css from './Profile.module.scss'

import ProfileAbout from "./ProfileAbout/ProfileAbout"
import ProfileImage from "./ProfileImage/ProfileImage"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

class ProfileInformation extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            status: !this.props.status || this.props.status === '' ? 'Write your status here' : this.props.status,
            statusOnFocus: false
        }
    } 
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            if (this.props.status) {
                this.setState({ status: this.props.status })    
            } else {
                 this.setState({ status: 'Write your status here'})
            }
        }
    }

    onStatusDoubleClick = (e) => {
        this.props.updateCurrentUserProfileStatus(this.state.status)
        this.setState({statusOnFocus: !this.state.statusOnFocus})
    }

    onStatusChange = (e) => {
        this.setState({ status: e.target.value })
    }

    onBlurInput = (e) => {
        this.setState({ statusOnFocus: false })
    }

    render = () => {
        return (
            <div className="userAboutContainer">
        
                <ProfileImage largePhoto={this.props.profileInfo.photos.large} />

                <ProfileStatus 
                    onStatusDoubleClick={this.onStatusDoubleClick}
                    onStatusChange={this.onStatusChange}
                    onBlurInput={this.onBlurInput}
                    status={this.state.status}
                    statusOnFocus={this.state.statusOnFocus}
                />

                <ProfileAbout 
                    fullName={this.props.profileInfo.fullName}
                    aboutMe={this.props.profileInfo.aboutMe}
                    lookingForAJobDescription={this.props.profileInfo.lookingForAJobDescription}
                    vk={this.props.profileInfo.contacts.vk}
                />

        </div>
    )
    }
}

export default ProfileInformation