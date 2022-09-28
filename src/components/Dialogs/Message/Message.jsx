import React from "react"
import styles from "./Message.module.scss"

const Message = ({ name, text }) => {
    return <>
        <div className={`${styles.message} ${styles.messageSend}`}>
            <h2>{ name }</h2>
            <p>{ text }</p>
        </div>
    </>
}


export default Message