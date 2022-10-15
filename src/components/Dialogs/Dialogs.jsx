import React, { useEffect } from "react"
import styles from './Dialogs.module.scss'
import { NavLink, useParams } from "react-router-dom"
import MessagesContainer from "./Messages/MessagesContainer"


const Dialogs = ({ chats, setFriends }) => {

    const { id } = useParams()

    console.log(chats)
    useEffect(() => {
        setFriends()
    }, [setFriends])

    return (
        <div className={styles.content}>
           <div className={styles.dialogs}>
            {
                chats.map((chat, index) => <NavLink to={`/Dialogs/${chat.user.id}`} className={styles.dialogs__item} key={index}>{chat.user.firstname}</NavLink>)
            }
            <hr />
            <NavLink to="/Dialogs/3" className={styles.dialogs__item}>USER WITH ID 3</NavLink>
            <NavLink to="/Dialogs/2" className={styles.dialogs__item}>USER WITH ID 2</NavLink>
           </div>
            {
                id ? <MessagesContainer chatWithId={id} /> : <div>Please Select User To Chat</div>
            }
        </div>
    )
}




export default Dialogs