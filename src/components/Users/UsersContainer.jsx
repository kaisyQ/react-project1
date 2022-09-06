import React from "react"
import { connect } from "react-redux"
import { usersActionCreater, getUsers, getUserAtNumPage, makeUserFollowed, makeUserUnfollowed } from "../../redux/users-reducer"
import Users from "./Users"

class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(1)
    }
    
    getUsersToShow = (num) => {
        this.props.getUserAtNumPage(num, this.props.usersPageData.pageCount)
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
                changeCurrentPage={this.props.changeCurrentPage}

                makeUserFollowed={this.props.makeUserFollowed}
                makeUserUnfollowed={this.props.makeUserUnfollowed}
            />  
        )
    }
}


let mapStateToProps = (state) => {
    return {
        usersPageData: state.usersPageData
    }
}

let mapDispatchToProps = {
    follow: usersActionCreater.follow,
    changeCurrentPage: usersActionCreater.changeCurrentPage,
    pushUserToFollowArr: usersActionCreater.pushUserToFollowArr,
    deleteUserInFollowArr: usersActionCreater.deleteUserInFollowArr,
    getUsers,
    getUserAtNumPage,
    makeUserFollowed,
    makeUserUnfollowed
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer