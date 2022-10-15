import React from "react"
import io from "socket.io-client"

import Message from './Message/Message'
import styles from './Messages.module.scss'
import { useState, useEffect } from 'react'

const Messages = ({ currentUserId, chatWithId, updateMessages, firstname, messages }) => {
    const [messageText, setMessageText] = useState('')
    const [socket, setSocket] = useState(null)
    const [room, setRoom] = useState('')

    useEffect(() => {
        setSocket(() => {
            const tmpSocket = io.connect('http://localhost:8080')
            tmpSocket.emit('connect-to-room', { 
                id: currentUserId, 
                chatWithId: chatWithId
            })
            return tmpSocket
        })
        return () => {
            if (socket) {
                socket.emit('save-messages')
                socket.emit('disconnect')
            }
        }
    }, [])

    if (socket) {

        socket.on('initial', (data) => {
            setRoom(data.room)

        })

        socket.on('all-messages', (data) => {
            updateMessages(data)
        })
    }

    const submitMessage = (ev) => {
        ev.preventDefault()
        socket.emit('send-message', {
            message : {
                fromId: currentUserId,
                toId: chatWithId,
                firstname: firstname,
                text: messageText
            },
            room: room
        })
    }

    return <>
        <div className={styles.chat}>
            <ul id="messages" className={styles.messages}>
            {
               messages.map((message, index) => <Message key={index} text={message.text} name={message.firstname}/>)
            }
            </ul>
            <form className={styles.form} onSubmit={submitMessage}>
                <input id="input" className={styles.input} onChange={(ev) =>{ setMessageText(ev.target.value) }} value={messageText}/>
                <button type="submit">Send</button>
            </form>
        </div>
    </>
}

export default Messages