import React from 'react'
import Preloader from '../Common/Preloader/Preloader'

import css from './Users.module.css'

import User from './User/User'

const Users = (props) => {
    const onPageNumberClick = (spanIndex) => {
        props.changeCurrentPage(spanIndex)
        props.getUsersToShow(spanIndex)
    }

    const countOfPageNumbers = Math.ceil( props.totalCount / props.pageCount )
    let tempArrOfPageNumbers = []
    if (countOfPageNumbers - props.currentPage < 10) {
        tempArrOfPageNumbers.push(1)
        for(let i = countOfPageNumbers - 9; i < countOfPageNumbers; ++i) {
            tempArrOfPageNumbers.push(i)
        }
    } else {
        switch (props.currentPage) {
            case 1:
                for(let i = 0; i < 9; ++i) {
                    tempArrOfPageNumbers.push(props.currentPage + i)
                }
                break
            case 2:
                for(let i = 0; i < 9; ++i) {
                    tempArrOfPageNumbers.push(props.currentPage - 1 + i)
                }
                break
            default:
                tempArrOfPageNumbers.push(1)
                for(let i = 0; i < 8; ++i) {
                    tempArrOfPageNumbers.push(props.currentPage + i)
                }
                break   
        }
    }


    tempArrOfPageNumbers.push(countOfPageNumbers)
        
    
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
                    />
                 )
                }
            </div>
        </div>
    )
}


export default Users

