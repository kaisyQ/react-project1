import React from "react"
import { NavLink } from "react-router-dom"
import css from './Dialogs.module.css'


const Dialogs = (props) => {
    let newMessageTexareaRef = React.createRef()

    const createNewMessage = () => {    
        props.createNewMessage()
    }

    const newMessTextareaUpdade = () => {
        let text = newMessageTexareaRef.current.value
        props.updateNewMessageTextarea(text)
    }

    return (
        <div className={css.content}>
           <div className={css.dialogs}>
                {props.dialogsPageData.dialogs.map((dialogName) => <NavLink to="dialogs/1" className={css.item}> {dialogName} </NavLink>)}
           </div>
           <div className={css.messages}>
                {props.dialogsPageData.messages.map( mess => <div className="message">{mess}</div>)}
                <h4>new message</h4>
                <textarea value={props.dialogsPageData.newMessText}ref={newMessageTexareaRef} onChange={newMessTextareaUpdade}></textarea>
                <div className={css.buttonContainer}>
                    <button onClick={ createNewMessage }>send</button>
                </div>
           </div>
        </div>
    )
}

export default Dialogs