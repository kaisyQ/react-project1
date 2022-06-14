import React from "react"

const ProfileStatus = (props) => {
    return (
        <>
            <div onDoubleClick={props.onStatusDoubleClick}>
            {
                !props.statusOnFocus
                    ?   <span>{props.status}</span>
                    :   <input type='text' onChange={props.onStatusChange} onBlur={props.onBlurInput} value={props.status}/>
            }
            </div>
        </>
    )
}

export default ProfileStatus