import React from "react"
import styles from './Profile.module.scss'

import PostsContainer from './Posts/PostsContainer'
import ProfileInformation from './ProfileInformation/ProfileInformation'

const Profile = (props) => {
    if (!props.profileInfo){
        return <></>
    } else {
        return <>
            <div className={styles.container}>
                <ProfileInformation {...props} />
                <PostsContainer photo={props.largePhoto} />
            </div>
        </> 
    }
}

export default Profile