import React from "react"
import { useState } from 'react'
import styles from "./GlobalChat.module.scss"

import io from "socket.io-client"


const socket = io.connect('http://localhost:8080')

var messages = document.querySelector('#messages')


const GlobalChat = () => {
    const [inptVl, setInptVl] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(inptVl)
        if (inptVl) {
            socket.emit('chat_message', inptVl)
            setInptVl('')
        }
    
        socket.on('chat_message', function(msg) {
            console.log('abcd')
            var item = document.createElement('li')
            item.textContent = msg
            messages.appendChild(item)
        })
    }

    return (
        <div className={styles.chat}>
            <ul id="messages" className={styles.messages}></ul>
            <form className={styles.form} onSubmit={formSubmit}>
                <input id="input" className={styles.input} onChange={(ev) =>{ setInptVl(ev.target.value) }} value={inptVl}/><button type="submit">Send</button>
            </form>
        </div>
    )
}



export default GlobalChat