import React from 'react'
import Preloader from '../Common/Preloader/Preloader'

import User from './User/User'

const Users = (props) => {
    const onPageNumberClick = (spanIndex) => {
        props.changeCurrentPage(spanIndex)
        props.getUsersToShow(spanIndex)
    }

    const countOfPageNumbers = Math.ceil( props.totalCount / props.pageCount )

    let tempArrOfPageNumbers = []

    for (let i = 1; i <= countOfPageNumbers; ++i) {
        tempArrOfPageNumbers.push(i)
    }
    
    return (
        <div className='users-wrapper'>
            { props.isFetching ? <Preloader/> : null }

            <div className='user-nav'>
            {   
                tempArrOfPageNumbers.map((num, index) => <span onClick={() => onPageNumberClick(index + 1)} key={index}> {num} </span>)
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
                    />
                 )
                }
            </div>
        </div>
    )
}


export default Users

