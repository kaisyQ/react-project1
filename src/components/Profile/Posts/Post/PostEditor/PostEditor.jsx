import React, { useState, useEffect } from "react"

import styles from './PostEditor.module.scss'
import Button from "../../../../Common/Button/Button"
import EditButton from "../../../../Common/EditButton/EditButton"

const PostEditor = ({ deletePost, updatePost, currentUserId, tmpUserId, text, id }) => {

    const [isEditModeOn, setIsEditModeOn] = useState(false)
    const [editInptVl, setEditInptVl] = useState('')
    
    useEffect(() => {
        setEditInptVl(text)
    }, [text])


    const onDltPostBtn = (ev) => { deletePost(id) }

    const onOKPostBtn = (ev) => {
        if (editInptVl !== text) {
            updatePost(id, editInptVl)
        }
        setIsEditModeOn(false)
    }

    return <>
        <div className={styles.editBlock}>
        {
            !isEditModeOn ? 
                <p>{ text }</p> : 
                <input type="text" value={editInptVl} onChange={(ev) => { setEditInptVl(ev.target.value) }}/>
        }
        </div>
        {
            currentUserId === tmpUserId ? 
                <>
                    <Button onClick={onDltPostBtn} padding={'10px 15px'}>X</Button>
                    {
                        !isEditModeOn ?
                            <div className={styles.editItem}>
                                <EditButton  onClick={(ev) => { setIsEditModeOn(true) }} />
                            </div> :
                            <div className={styles.editItem}>
                                <Button onClick={onOKPostBtn} padding={'8px 10px'}>OK</Button>
                            </div>
                    }
                </> : <></>
        }
    </>
}

export default PostEditor