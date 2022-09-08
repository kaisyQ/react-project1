import UsersAPIContainer from "./UsersApiContainer"
import { connect } from "react-redux"
import { getCurrentPage, getIsFetching, getPageCount, getTotalCount, getUserInFollowingProcess, getUsersToShow } from "../../redux/selectors/users-selector"
import { usersActionCreater, getUsers, getUserAtNumPage, makeUserFollowed, makeUserUnfollowed } from "../../redux/users-reducer"


const mapStateToProps = (state) => ({
    currentPage: getCurrentPage(state),
    usersToShow: getUsersToShow(state),
    totalCount: getTotalCount(state),
    pageCount: getPageCount(state),
    isFetching: getIsFetching(state),
    userInFollowingProcess: getUserInFollowingProcess(state)
})

const mapDispatchToProps = {
    follow: usersActionCreater.follow,
    changeCurrentPage: usersActionCreater.changeCurrentPage,
    getUsers,
    getUserAtNumPage,
    makeUserFollowed,
    makeUserUnfollowed
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)