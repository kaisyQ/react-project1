import React  from "react"
import styles from './Posts.module.scss'
import { useFormik } from 'formik';
import Post from './Post/Post'
import Button from './../../Common/Button/Button'

const Posts = ({ createNewPost, posts, photo}) => {
    const postsFormik = useFormik({
        initialValues: {
            newPostVl: ''
        },
        onSubmit: (values) => { 
            createNewPost(values.newPostVl)
            postsFormik.setFieldValue('newPostVl', '')
        }
    })

    return <>
        <div className={styles.postsContainer}>
            <div className={styles.posts}>
                <div className={styles.newPost}>
                    <h4>Create New Post</h4>
                    <form onSubmit={postsFormik.handleSubmit}>
                        <textarea 
                            name='newPostVl'
                            onChange={postsFormik.handleChange}
                            onBlur={postsFormik.handleBlur}
                            value={postsFormik.values.newPostVl}
                        />
                        <hr />
                        <div className={styles.createFormBtn}>
                            <Button type="submit" padding={'5px'}>Create post</Button>
                        </div>
                    </form>
                </div>
                <div className={styles.allPosts}>
                    <h4>All Posts</h4>
                    { posts.map((message, index) => <Post key={index} photo={photo} message={message}/>) }
                </div>
            </div>
        </div>
    </>
}

export default Posts