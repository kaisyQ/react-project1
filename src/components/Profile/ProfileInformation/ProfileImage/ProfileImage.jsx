import React from "react"

import userImage from '../../../../Images/User.png'
import css from './ProfileImage.module.scss'

const ProfileImage = (props) => {
    return (
        <>
            <div className={css.userImage}>
                <img src={props.largePhoto || userImage} alt="" />
            </div>
        </>
    )
}

export default ProfileImage

