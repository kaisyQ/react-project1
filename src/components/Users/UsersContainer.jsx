import React from "react"
import axios from 'axios'

import { connect } from "react-redux"
import { usersActionCreater } from "../../redux/users-reducer"

import Users from "./Users"

class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
        this.props.changeFetching(true) 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageData.currentPage}`, {
            withCredentials:true,

        }).then
        (
            response => {
                this.props.loadUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.changeFetching(false) 
                
            }
        )
    }
    
    getUsersToShow = (num) => {
        const countOfUsersOnPage = this.props.usersPageData.pageCount

        this.props.changeFetching(true) 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${countOfUsersOnPage}`,{
            withCredentials: true
        }).then
        (
            response => {
                this.props.loadUsers(response.data.items)
                this.props.changeFetching(false)
            }
        )
    }


    render () {
        return (
            <Users 
                currentPage={this.props.usersPageData.currentPage}
                usersToShow={this.props.usersPageData.usersToShow}
                totalCount={this.props.usersPageData.totalCount}
                pageCount={this.props.usersPageData.pageCount}
                isFetching={this.props.usersPageData.isFetching}
                userInFollowingProcess={this.props.usersPageData.userInFollowingProcess}

                getUsersToShow={this.getUsersToShow}
                follow={this.props.follow}
                changeCurrentPage={this.props.changeCurrentPage}
                changeFetching={this.props.changeFetching}
                pushUserToFollowArr={this.props.pushUserToFollowArr}
                deleteUserInFollowArr={this.props.deleteUserInFollowArr}
            />  
        )
    }
}


let mapStateToProps = (state) => {
    return {
        usersPageData: state.usersPageData
    }
}

let mapDisptchToProps = (dispatch) => {
    return {
        loadUsers: (newUsers) => { dispatch(usersActionCreater.loadUsers(newUsers)) },
        follow: (id) => { dispatch(usersActionCreater.follow(id)) },
        changeCurrentPage: (pageNumber) => { dispatch(usersActionCreater.changeCurrentPage(pageNumber)) },
        setTotalCount: (number) => { dispatch(usersActionCreater.totalCount(number)) },
        changeFetching: (changeHow) => { dispatch(usersActionCreater.changeFetching(changeHow)) },
        pushUserToFollowArr: (pushingUserId) => {dispatch(usersActionCreater.pushUserToFollowArr(pushingUserId)) },
        deleteUserInFollowArr: (deleteUserId) => {dispatch(usersActionCreater.deleteUserInFollowArr(deleteUserId)) }
    }
}


let UsersContainer = connect(mapStateToProps, mapDisptchToProps)(UsersAPIContainer)

export default UsersContainer