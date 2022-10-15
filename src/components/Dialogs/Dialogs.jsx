import React from "react"
import styles from './Dialogs.module.scss'
import Button from './../Common/Button/Button'
import { NavLink } from "react-router-dom"
import { useFormik } from 'formik'


const Dialogs = ({ chats, messages, createMessage }) => {

    const chatFormik = useFormik({
        initialValues: {
            newMessageText: ''
        },
        onSubmit: (values) => { createMessage(values.newMessageText) }
    })

    return (
        <div className={styles.content}>
           <div className={styles.dialogs}>
            {
                chats
                .map((dialogName, index) => <NavLink to="dialogs/1" className={styles.dialogs__item} key={index}>
                        <div>
                            {dialogName}
                        </div>
                    </NavLink>)
            }
           </div>
            <div className={styles.messages}>
                <div className={styles.messages__scroll}>
                    { messages.map( (text, index) => <div key={index}>{ text }</div>) }
                </div>
                <form onSubmit={chatFormik.handleSubmit}>
                    <div contentEditable='true'
                        name='newMessageText'
                        value={chatFormik.values.newMessageText}
                        onChange={chatFormik.handleChange}
                        placeholder='Enter new message...'
                    >
                    </div>
                    <Button type='submit' padding={'8px 10px'}>Send</Button>
                </form>
           </div>
        </div>
    )
}




export default Dialogs