import React from "react"
import styles from './ProfileInformation.module.scss'

import ProfileAbout from "./ProfileAbout/ProfileAbout"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userImage from './../../../Images/User.png'

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
        return <>
            <div className={styles.userAboutContainer}>
        
                <div className={styles.userImage}>
                    <img src={this.props.profile.largePhoto || userImage} alt="avatar" />
                </div>
                
                <div className={styles.userAbout}>
                    <h2>{this.props.profile.fullName}</h2>
                    <ProfileStatus 
                        onStatusDoubleClick={this.onStatusDoubleClick}
                        onStatusChange={this.onStatusChange}
                        onBlurInput={this.onBlurInput}
                        status={this.state.status}
                        statusOnFocus={this.state.statusOnFocus}
                    />
                    <hr />
                    <ProfileAbout 
                    />
                </div>  

        </div>
    </>
    }
}

export default ProfileInformation