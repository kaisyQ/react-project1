import React from "react"
import styles from './ProfileStatus.module.scss'

const ProfileStatus = (props) => {
    return <>
        <div className={styles.status} onDoubleClick={props.onStatusDoubleClick}>
        {
            !props.statusOnFocus
                ?   <span>{props.status}</span>
                :   <input 
                        type='text' 
                        onChange={props.onStatusChange} 
                        onBlur={props.onBlurInput} 
                        value={props.status}
                    />
        }
        </div>
    </>
}

export default ProfileStatus