import React from "react"
import styles from './Post.module.scss'
import userImage from './../../../../Images/User.png'
import PostEditorContainer from "./PostEditor/PostEditorContainer"

const Post = (props) => {
    return <>
        <div className={styles.post}>
            <div className={styles.userImage}>
                <img src={userImage} alt="avatar" />
            </div>
            <PostEditorContainer {...props} />
        </div>
    </>
}

export default Post