import React from "react"
import css from './Dialogs.module.css'

import { NavLink } from "react-router-dom"
import { Field, reduxForm } from 'redux-form'

let SendMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component='textarea' name='newMessageText'/>
        <div>
            <button> Send </button>
        </div> 
    </form>
}

SendMessageForm = reduxForm({form: 'sendMessageForm'})(SendMessageForm)

const Dialogs = (props) => {

    const createNewMessage = (values) => { props.createNewMessage(values.newMessageText) }

    return (
        <div className={css.content}>
           <div className={css.dialogs}>
                {props.dialogsPageData.dialogs.map((dialogName) => <NavLink to="dialogs/1" className={css.item}> {dialogName} </NavLink>)}
           </div>
           <div className={css.messages}>
                {props.dialogsPageData.messages.map( mess => <div className="message">{mess}</div>)}
                <h4>new message</h4>
                <SendMessageForm onSubmit={createNewMessage}/>
           </div>
        </div>
    )
}




export default Dialogs