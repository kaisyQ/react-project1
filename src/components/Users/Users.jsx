import React from 'react'
import Preloader from '../Common/Preloader/Preloader'

import css from './Users.module.css'

import { makeNavArr } from './UsersTEMP'

import User from './User/User'

const Users = (props) => {
    const onPageNumberClick = (spanIndex) => {
        props.changeCurrentPage(spanIndex)
        props.getUsersToShow(spanIndex)
    }

    let tempArrOfPageNumbers = makeNavArr(props.currentPage, Math.ceil( props.totalCount / props.pageCount ))
    return (
        <div className='users-wrapper'>
            { props.isFetching ? <Preloader/> : null }

            <div className={css.userNav}>
            {   
                tempArrOfPageNumbers.map((num, index) => <div onClick={() => onPageNumberClick(num)} key={ index }> {num} </div>)
            }
            </div>
            <div className='users'>
                { props.usersToShow.map(user => 
                    <User 
                        key={user.id} 
                        user={user} 
                        userInFollowingProcess={props.userInFollowingProcess}
                        deleteUserInFollowArr={props.deleteUserInFollowArr}
                        pushUserToFollowArr={props.pushUserToFollowArr} 
                        follow={props.follow}
                        makeUserFollowed={props.makeUserFollowed}
                        makeUserUnfollowed={props.makeUserUnfollowed}
                    />
                 )
                }
            </div>
        </div>
    )
}


export default Users

