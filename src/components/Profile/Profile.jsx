import React from "react"
import css from './Profile.module.css'

import PostsContainer from './Posts/PostsContainer'
import ProfileInformation from './ProfileInformation/ProfileInformation'

const Profile = (props) => {
    if (!props.profileInfo){
        return <></>
    } else {
        return <div className={css.content}>
                <ProfileInformation {...props.profileInfo} />
                <PostsContainer />
            </div>
    }
}

export default Profile