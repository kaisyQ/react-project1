import React from "react"
import styles from './Post.module.scss'
import userImage from './../../../../Images/User.png'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.userImage}>
                <img src={props.largePhoto ? props.largePhoto : userImage} alt="avatar" />
            </div>
            <p>{props.message}</p>
        </div>
    )
}

export default Post