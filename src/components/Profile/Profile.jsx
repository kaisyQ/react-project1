import React from "react"
import styles from './Profile.module.scss'

import PostsContainer from './Posts/PostsContainer'
import ProfileInformation from './ProfileInformation/ProfileInformation'

const Profile = (props) => {
    if (!props.profile){
        return <></>
    } else {
        return <>
            <div className={styles.container}>
                <ProfileInformation {...props} />
                <PostsContainer id={props.profile.id}/>
            </div>
        </> 
    }
}

export default Profile