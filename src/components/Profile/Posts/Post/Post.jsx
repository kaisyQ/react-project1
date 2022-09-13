import React from "react"
import styles from './Post.module.scss'
import userImage from './../../../../Images/User.png'

const Post = ({ message, photo }) => {
    return <>
        <div className={styles.post}>
            <div className={styles.userImage}>
                <img src={photo ? photo : userImage} alt="avatar" />
            </div>
            <p>{ message }</p>
        </div>
    </>
}

export default Post