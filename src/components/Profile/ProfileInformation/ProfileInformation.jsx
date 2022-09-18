import React, { useEffect, useState } from "react"
import styles from './ProfileInformation.module.scss'

import ProfileAbout from "./ProfileAbout/ProfileAbout"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userImage from './../../../Images/User.png'

const ProfileInformation = (props) => {

    const [status, setStatus] = useState('Write your status here')
    const [statusOnFocus, setStatusOnFocus] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusDoubleClick = (ev) => {
        props.updateCurrentUserProfileStatus(status)
        setStatusOnFocus(!statusOnFocus)
    }

    const onStatusChange = (ev) => { setStatus(ev.target.value) }

    const onBlurInput = (ev) => { setStatusOnFocus(false) }

    return <>
        <div className={styles.userAboutContainer}>
            <div className={styles.userImage}>
                <img src={props.profile.largePhoto || userImage} alt="avatar" />
            </div>
            
            <div className={styles.userAbout}>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus 
                    onStatusDoubleClick={onStatusDoubleClick}
                    onStatusChange={onStatusChange}
                    onBlurInput={onBlurInput}
                    status={status}
                    statusOnFocus={statusOnFocus}
                />
                <hr />
                <ProfileAbout />
            </div>  
        </div>
    </>
}


export default ProfileInformation