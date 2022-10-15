import React  from "react"
import styles from './Posts.module.scss'
import { useFormik } from 'formik';
import Post from './Post/Post'
import Button from './../../Common/Button/Button'

const Posts = ({ createNewPost, posts, currentUserId, id }) => {
    const postsFormik = useFormik({
        initialValues: {
            newPostVl: ''
        },
        onSubmit: (values) => { 
            createNewPost(currentUserId, values.newPostVl)
            postsFormik.setFieldValue('newPostVl', '')
        }
    })

    return <>
        <div className={styles.postsContainer}>
            <div className={styles.posts}>
                <div className={styles.newPost}>
                        {
                            currentUserId === id ?
                            <form onSubmit={postsFormik.handleSubmit}>
                                <h4>Create New Post</h4>
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
                            </form> : <></>
                        }
                </div>
                <div className={styles.allPosts}>
                    {
                        posts.length !== 0 ? 
                        <>
                            <h4>All Posts</h4> 
                            { posts.map((post, index) => <Post currentUserId={currentUserId} tmpUserId={id} key={index} {...post} />) }
                        </>
                        : <div>This wall is empty...</div>
                    }
                </div>
            </div>
        </div>
    </>
}

export default Posts