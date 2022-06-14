import React from "react"

const ProfileAbout = (props) => {
    return (
        <>
            <div className="userAboutInfo">
                <div>{props.fullName}</div>
                <div>{props.aboutMe}</div>
                <div>{props.lookingForAJobDescription}</div>
                <div>my vk : {props.vk}</div>
            </div >
        </>
    )
}

export default ProfileAbout