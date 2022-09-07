import React from "react"
import { connect } from "react-redux"
import { getCurrentPage, getIsFetching, getPageCount, getTotalCount, getUserInFollowingProcess, getUsersToShow } from "../../redux/selectors/users-selector"
import { usersActionCreater, getUsers, getUserAtNumPage, makeUserFollowed, makeUserUnfollowed } from "../../redux/users-reducer"
import Users from "./Users"

class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(1)
    }
    
    getUsersToShow = (num) => {
        this.props.getUserAtNumPage(num, this.props.data.pageCount)
    }


    render () {
        return (
            <Users 
                {...this.props.data}

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
        data : {
            currentPage: getCurrentPage(state),
            usersToShow: getUsersToShow(state),
            totalCount: getTotalCount(state),
            pageCount: getPageCount(state),
            isFetching: getIsFetching(state),
            userInFollowingProcess: getUserInFollowingProcess(state)
        }
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


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)