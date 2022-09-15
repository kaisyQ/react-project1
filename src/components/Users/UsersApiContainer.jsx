import React, { useEffect } from 'react'
import Users from "./Users"

const UsersAPIContainer = (props) => {

    useEffect(() => {
        props.getUsers(1)
    }, [])
    
    const getUsersToShow = (num) => { props.getUserAtNumPage(num, props.pageCount) }


    return <>
        <Users {...props} getUsersToShow={getUsersToShow} />  
    </>
}

export default UsersAPIContainer