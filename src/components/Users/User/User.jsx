import React from "react"

import { NavLink } from 'react-router-dom'

import styles from './User.module.scss'
import defaultUserImage from '../../../Images/User.png'
import Button from './../../Common/Button/Button'

const User = (props) => {
    const onFollow = (id) => {
        props.makeUserFollowed(id)
    }

    const onUnFollow = (id) => {
        props.makeUserUnfollowed(id)
    }

    return (
        <>
            <table className={styles.user}>
                <tbody>
                    <tr>
                        <td className={styles.userAvatar}>
                            <NavLink to={`/Profile/${props.user.id}`}>
                                <div className={styles.avatar}>
                                    <img src={ props.user.photos.large ? props.user.photos.large : defaultUserImage} alt="avatar"/>
                                </div>
                            </NavLink>
                            <p className={styles.userName}>{ props.user.name }</p>
                        </td>
                        <td className={styles.userStatus}>Im using this social network</td>
                        <td className={styles.userBnts}>
                            { props.user.followed ? 
                                <Button
                                    disabled={props.userInFollowingProcess.find((userId) => userId === props.user.id)} 
                                    onClick={ () => onUnFollow(props.user.id) }
                                >Unfollow</Button> :
                                <Button
                                    disabled={props.userInFollowingProcess.find((userId) => userId === props.user.id)} 
                                    onClick={ () => onFollow(props.user.id) }
                                >Follow</Button>
                            }
                            <Button>Write message</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default User