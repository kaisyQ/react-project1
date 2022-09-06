import React from "react"
import css from './Post.module.scss'

const Post = (props) => {
    return (
        <div>{props.message}</div>
    )
}

export default Post