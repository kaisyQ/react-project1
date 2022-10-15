import React from "react"
import styles from './Dialogs.module.scss'
import Button from './../Common/Button/Button'
import { NavLink, useParams } from "react-router-dom"
import MessagesContainer from "./Messages/MessagesContainer"


const Dialogs = ({ chats }) => {

    const { id } = useParams()

    return (
        <div className={styles.content}>
           <div className={styles.dialogs}>
            {
                chats
                .map((dialogName, index) => <NavLink to="/Dialogs/1" className={styles.dialogs__item} key={index}>
                        <div>
                            {dialogName}
                        </div>
                    </NavLink>)
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