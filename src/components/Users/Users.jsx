import React from 'react'
import Preloader from '../Common/Preloader/Preloader'

import User from './User/User'
import PageNav from './PageNav/PageNav'

const Users = (props) => {
    return <>
        <div className='users-wrapper'>
            { props.isFetching && <Preloader/> }
            <PageNav 
                changeCurrentPage={props.changeCurrentPage}
                getUsersToShow={props.getUsersToShow}
                currentPage={props.currentPage}
                totalCount={props.totalCount}
                pageCount={props.pageCount}
            />
            <div className='users'>
                { props.usersToShow.map(user => props.currentUserId !== user.id ?
                    <User 
                        isAuth={props.isAuth}
                        key={user.id} 
                        user={user} 
                        userInFollowingProcess={props.userInFollowingProcess}
                        follow={props.follow}
                        makeUserFollowed={props.makeUserFollowed}
                        makeUserUnfollowed={props.makeUserUnfollowed}
                    /> : <></>)
                }
            </div>
        </div>
    </>
}

export default Users

