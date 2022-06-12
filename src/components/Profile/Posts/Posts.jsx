import React  from "react"
import css from './Posts.module.css'
import { Field, reduxForm } from "redux-form"
import Post from './Post/Post'

let CreatePostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component='textarea' name='createNewPostTextarea'/>
        <div>
            <button>Create post</button>
        </div> 
    </form>
}

CreatePostForm = reduxForm ({ form:'createPostForm'}) (CreatePostForm)

const Posts = (props) => {

    const createNewPost = (values) => {
        props.createNewPost(values.createNewPostTextarea)
    }

    return (
        <div className={css.Posts}>
            <h3>Your new post : </h3>
            <CreatePostForm onSubmit={createNewPost}/>
            <h3>Posts :</h3>
            {props.postPageData.posts.map((mess, index) => <Post key={index} message={mess}/>)}
        </div>
    )
}

export default Posts