import React from "react"

const ProfileInformation = (props) => {
    return <div className="userAboutContainer">
        <div>
            <img src={props.photos.large} alt="" />
        </div>
        <div className="userAboutInfo">
            <div>{props.fullName}</div>
            <div>{props.aboutMe}</div>
            <div>{props.lookingForAJobDescription}</div>
            <div>my vk : {props.contacts.vk}</div>
        </div >
    </div>
}

export default ProfileInformation