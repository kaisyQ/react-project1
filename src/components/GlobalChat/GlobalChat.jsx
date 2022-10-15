import React from "react"
import { useState, useEffect, useLayoutEffect } from 'react'
import styles from "./GlobalChat.module.scss"

import io from "socket.io-client"


const Message = ({ text }) => {
    return <>
        <li>
            { text }
        </li>
    </>
}


const GlobalChat = () => {
    const [inptVl, setInptVl] = useState('')
    const [messages, setMessages] = useState([])
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(() => {
            const tmpSocket = io.connect('http://localhost:8080')
            tmpSocket.emit('connect-to-room')
            return tmpSocket
        })
    }, [])


    if (socket) {
        socket.on('initial', () => {
            console.log('IM HERE')
            setMessages([...messages, "INITIAL HUINUA"])
        })
    }

    const formSubmit = (ev) => {
        ev.preventDefault()
        if (inptVl) {
            socket.emit('chat_message', inptVl)
            setInptVl('')
        }
    
        socket.on('chat_message', (msg) => {
            setMessages([...messages, msg])
        })
    }

    return (
        <div className={styles.chat}>
            <ul id="messages" className={styles.messages}>
            {
                messages.map((message, index) => <Message key={index} text={message} />)
            }
            </ul>
            <form className={styles.form} onSubmit={formSubmit}>
                <input id="input" className={styles.input} onChange={(ev) =>{ setInptVl(ev.target.value) }} value={inptVl}/><button type="submit">Send</button>
            </form>
        </div>
    )
}



export default GlobalChat