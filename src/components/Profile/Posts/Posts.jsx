import React  from "react"
import css from './Posts.module.css'

import Post from './Post/Post'

const Posts = (props) => {
    let textAreaRef = React.createRef()

    const createNewPost = () => {
        props.createNewPost()
    }

    const changeNewPostText = () => {
        let text = textAreaRef.current.value
        props.updateNewPostTextarea(text)
    }
    
    return (
        <div className={css.Posts}>
            <h3>Your new post : </h3>
            <textarea ref={ textAreaRef } value={props.postPageData.newPostText} onChange={ changeNewPostText }></textarea>
            <button className={ css.createButton } onClick={ createNewPost }>Create</button>
            <h3>Posts :</h3>
            {props.postPageData.posts.map((mess, index) => <Post key={index} message={mess}/>)}
        </div>
    )
}

export default Posts