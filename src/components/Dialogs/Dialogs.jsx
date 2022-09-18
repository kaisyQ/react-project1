import React from "react"
import styles from './Dialogs.module.scss'
import Button from './../Common/Button/Button'
import { NavLink } from "react-router-dom"
import { useFormik } from 'formik';

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
                    .map((dialogName, index) => <NavLink to="dialogs/1" className={styles.item} key={index}>
                            <div>
                                {dialogName} 
                            </div>
                        </NavLink>) 
                }
           </div>
           <div className={styles.messages}>
                { messages.map( (text, index) => <div key={index} className="message">{ text }</div>) }
                <h4>new message</h4>
                <form onSubmit={chatFormik.handleSubmit}>
                    <textarea 
                        name='newMessageText'
                        value={chatFormik.values.newMessageText}
                        onChange={chatFormik.handleChange}
                    />
                    <Button padding={'5px 10px'}>Send</Button>
                </form>
           </div>
        </div>
    )
}




export default Dialogs