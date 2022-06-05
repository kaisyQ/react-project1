import React from "react"

const ProfileInformation = (props) => {
    return <div className="userAboutContainer">
        <div>
            <img src={props.profileInfo.photos.large} alt="" />
        </div>
        <div className="userAboutInfo">
            <div>{props.profileInfo.fullName}</div>
            <div>{props.profileInfo.aboutMe}</div>
            <div>{props.profileInfo.lookingForAJobDescription}</div>
            <div>my vk : {props.profileInfo.contacts.vk}</div>
        </div >
    </div>
}

export default ProfileInformation