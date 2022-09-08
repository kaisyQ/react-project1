import { followAPI, usersAPI } from "../api/api"

const LOAD_USERS = 'LOAD-USERS'
const FOLLOW_USER = 'FOLLOW-USER'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const CHANGE_FETCHING = 'CHANGE-FETCHING'
const ADD_USER_ARR_FOLLOWING_PROCESS = 'ADD-USER-ARR-FOLLOWING-PROCESS'
const DELETE_USER_ARR_FOLLOWING_PROCESS = 'DELETE-USER-ARR-FOLLOWING-PROCESS'

const defaultStateValue = {
    usersToShow: [],
    currentPage: 1,
    pageCount: 20,
    totalCount: 0,
    isFetching: true,
    userInFollowingProcess: []
}

export const usersActionCreater = {
    loadUsers: (newUsers) => { return {type: LOAD_USERS, newUsers: newUsers} },
    follow: (id) => { return {type: FOLLOW_USER, userId: id} },
    changeCurrentPage: (pageNumber) => { return {type: CHANGE_CURRENT_PAGE, pageNumber: pageNumber} },
    totalCount: (number) => {return {type: SET_TOTAL_COUNT, totalCount:number} },
    changeFetching: (changeHow) => { return {type: CHANGE_FETCHING, changeHow:changeHow} },
    pushUserToFollowArr: (pushingUserId) => { return{type: ADD_USER_ARR_FOLLOWING_PROCESS, pushingUserId: pushingUserId} },
    deleteUserInFollowArr: (deleteUserId) => { return{type:DELETE_USER_ARR_FOLLOWING_PROCESS, deleteUserId: deleteUserId} }
}

const usersReducer = (state=defaultStateValue, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                usersToShow: action.newUsers
            }
        case FOLLOW_USER: 
            return {
                ...state,
                usersToShow: state.usersToShow.map(user => {
                    if (user.id === action.userId) return {...user, followed: !user.followed}
                    else return user
                })
            }
        case CHANGE_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, 
                totalCount: action.totalCount
            }
        case CHANGE_FETCHING:
            return {
                ...state,
                isFetching: action.changeHow
            }
        case ADD_USER_ARR_FOLLOWING_PROCESS:
            return {
                ...state,
                userInFollowingProcess: [...state.userInFollowingProcess, action.pushingUserId]
            }
        case DELETE_USER_ARR_FOLLOWING_PROCESS:
            return {
                ...state, 
                userInFollowingProcess: state.userInFollowingProcess.filter((userId) => userId !== action.deleteUserId)
            }
        default:
            return state;
    }

}

export const getUsers = (page) => {
    return (dispatch) => {
        dispatch(usersActionCreater.changeFetching(true))
        usersAPI.getUsersFromServer(page).then( response => {
            dispatch(usersActionCreater.totalCount(response.data.totalCount))
            dispatch(usersActionCreater.loadUsers(response.data.items))
            dispatch(usersActionCreater.changeFetching(false))
        })
    }
}

export const getUserAtNumPage = (page, count) => (dispatch) => {
    dispatch(usersActionCreater.changeFetching(true))
    
        usersAPI.getPageUsersFromServer(page, count).then( response => {
            dispatch(usersActionCreater.loadUsers(response.data.items))
            dispatch(usersActionCreater.totalCount(response.data.totalCount))
            dispatch(usersActionCreater.changeFetching(false))
        })
}

export const makeUserFollowed = (id) => (dispatch) => {
    debugger
    dispatch(usersActionCreater.pushUserToFollowArr(id))
    followAPI.followUser(id).then(response => {
        debugger
        if (response.data.resultCode === 0) {
            dispatch(usersActionCreater.deleteUserInFollowArr(id)) 
            dispatch(usersActionCreater.follow(id))  
        } 
    })
}

export const makeUserUnfollowed = (id) => (dispatch) => {
    dispatch(usersActionCreater.pushUserToFollowArr(id))
    followAPI.unfollowUser(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(usersActionCreater.deleteUserInFollowArr(id)) 
            dispatch(usersActionCreater.follow(id))  
        } 
    })
}


export default usersReducer