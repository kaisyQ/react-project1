import React from 'react'
import Preloader from '../Common/Preloader/Preloader'

import css from './Users.module.scss'

import User from './User/User'
import PageNav from './PageNav/PageNav'

const Users = (props) => {
    return <>
        <div className='users-wrapper'>
            { props.isFetching ? <Preloader/> : null }

            <PageNav 
                changeCurrentPage={props.changeCurrentPage}
                getUsersToShow={props.getUsersToShow}
                currentPage={props.currentPage}
                totalCount={props.totalCount}
                pageCount={props.pageCount}
            />
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
    </>
}


export default Users

