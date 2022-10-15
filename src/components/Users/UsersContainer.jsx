import UsersAPIContainer from "./UsersApiContainer"
import { connect } from "react-redux"
import { getCurrentPage, getIsFetching, getPageCount, getTotalCount, getUserInFollowingProcess, getUsersToShow } from "../../redux/selectors/users-selector"
import { follow, changeCurrentPage, getUsers, getUserAtNumPage, makeUserFollowed, makeUserUnfollowed } from "../../redux/users-reducer"
import { getId, getIsAuth } from "../../redux/selectors/auth-selector"


const mapStateToProps = (state) => ({
    currentPage: getCurrentPage(state),
    usersToShow: getUsersToShow(state),
    totalCount: getTotalCount(state),
    pageCount: getPageCount(state),
    isFetching: getIsFetching(state),
    userInFollowingProcess: getUserInFollowingProcess(state),
    currentUserId: getId(state),
    isAuth: getIsAuth(state)    
})

const mapDispatchToProps = {
    follow,
    changeCurrentPage,
    getUsers,
    getUserAtNumPage,
    makeUserFollowed,
    makeUserUnfollowed
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)