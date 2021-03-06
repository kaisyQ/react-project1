import React from "react"

import {NavLink} from 'react-router-dom'

import css from './User.module.css'
import defaultUserImage from '../../../Images/User.png'

const User = props => {

    const onFollow = (id) => {
        props.makeUserFollowed(id)
    }

    const onUnFollow = (id) => {
        props.makeUserUnfollowed(id)
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