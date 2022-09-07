import React  from "react"
import styles from './Posts.module.scss'
import { Field, reduxForm } from "redux-form"
import Post from './Post/Post'
import Button from './../../Common/Button/Button'

let CreatePostForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='createNewPostTextarea'/>
            <hr />
            <div className={styles.createFormBtn}>
                <Button padding={'5px'}>Create post</Button>
            </div>
        </form>
    </>
}

CreatePostForm = reduxForm ({ form:'createPostForm'}) (CreatePostForm)

const Posts = (props) => {

    const createNewPost = (values) => {
        props.createNewPost(values.createNewPostTextarea)
    }

    return <>
        <div className={styles.postsContainer}>
            <div className={styles.posts}>
                <div className={styles.newPost}>
                    <h4>Create New Post</h4>
                    <CreatePostForm className={styles.newPostForm} onSubmit={createNewPost}/>
                </div>
                <div className={styles.allPosts}>
                    <h4>All Posts</h4>
                    {props.postPageData.posts.map((mess, index) => <Post key={index} {...props} message={mess}/>)}
                </div>
            </div>
        </div>
    </>
}

export default Posts