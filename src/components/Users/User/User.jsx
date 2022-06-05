import React from "react"
import axios from 'axios'

import {NavLink} from 'react-router-dom'

import css from './User.module.css'
import defaultUserImage from '../../../Images/User.png'

const User = props => {

    const onFollow = (id) => {
        props.pushUserToFollowArr(id)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, { 
            withCredentials: true,
            headers: {
                'API-KEY': '0f42339c-8c45-4d01-8de8-9007b7db8bf6'
            }
        }).then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                props.deleteUserInFollowArr(id)  
                props.follow(id)  
            } 
        })
    }

    const onUnFollow = (id) => {
        props.pushUserToFollowArr(id)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, { 
            withCredentials: true,
            headers: {
                'API-KEY': '0f42339c-8c45-4d01-8de8-9007b7db8bf6'
            }
        }).then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                props.deleteUserInFollowArr(id)  
                props.follow(id)  
            } 
        })
    }

    return (
        <div className={css.container}>
            <div className={css.item}>
                <div className={css.itemInfo}>
                    <NavLink to={`/Profile/${props.user.id}`}>
                        <img src={ props.user.photos.large ? props.user.photos.large : defaultUserImage} alt=""/>
                    </NavLink>
                    <div>{ props.user.name }</div>
                    <div>
                        { props.user.followed ? 
                            <button
                                disabled={props.userInFollowingProcess.find((userId) => userId === props.user.id)} 
                                onClick={ () => onUnFollow(props.user.id) }
                            >Unfollow</button> :
                            <button 
                                disabled={props.userInFollowingProcess.find((userId) => userId === props.user.id)} 
                                onClick={ () => onFollow(props.user.id) }
                            >Follow</button>
                        }
                    </div>
                </div>
                <div className={css.itemStatus}>Im using this social network</div>
            </div>
        </div>
    )
}


export default User