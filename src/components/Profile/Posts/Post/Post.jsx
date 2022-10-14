import React from "react"
import styles from './Post.module.scss'
import userImage from './../../../../Images/User.png'
import Button from "../../../Common/Button/Button"

const Post = ({ deletePost, currentUserId, tmpId, text, id }) => {

    const onDltPostBtn = (ev) => {
        deletePost(id)
    }

    return <>
        <div className={styles.post}>
            <div className={styles.userImage}>
                <img src={userImage} alt="avatar" />
            </div>
            <p>{ text }</p>
            {
                currentUserId === tmpId ? <Button onClick={onDltPostBtn} padding={'10px 15px'}>X</Button> : <></>
            }
        </div>
    </>
}

export default Post