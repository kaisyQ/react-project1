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

export const loadUsers = (newUsers) => ({ type: LOAD_USERS, newUsers })
export const follow = (userId) => ({ type: FOLLOW_USER, userId })
export const changeCurrentPage = (pageNumber) => ({ type: CHANGE_CURRENT_PAGE, pageNumber })
export const totalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const changeFetching = (changeHow) => ({ type: CHANGE_FETCHING, changeHow })
export const pushUserToFollowArr = (pushingUserId) => ({ type: ADD_USER_ARR_FOLLOWING_PROCESS, pushingUserId })
export const deleteUserInFollowArr = (deleteUserId) => ({ type:DELETE_USER_ARR_FOLLOWING_PROCESS, deleteUserId })

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
        dispatch(changeFetching(true))
        usersAPI.getUsersFromServer(page).then( response => {
            dispatch(totalCount(response.data.totalCount))
            dispatch(loadUsers(response.data.items))
            dispatch(changeFetching(false))
        })
    }
}

export const getUserAtNumPage = (page, count) => (dispatch) => {
    dispatch(changeFetching(true))
    
        usersAPI.getPageUsersFromServer(page, count).then( response => {
            dispatch(loadUsers(response.data.items))
            dispatch(totalCount(response.data.totalCount))
            dispatch(changeFetching(false))
        })
}

export const makeUserFollowed = (id) => (dispatch) => {
    debugger
    dispatch(pushUserToFollowArr(id))
    followAPI.followUser(id).then(response => {
        debugger
        if (response.data.resultCode === 0) {
            dispatch(deleteUserInFollowArr(id)) 
            dispatch(follow(id))  
        } 
    })
}

export const makeUserUnfollowed = (id) => (dispatch) => {
    dispatch(pushUserToFollowArr(id))
    followAPI.unfollowUser(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(deleteUserInFollowArr(id)) 
            dispatch(follow(id))  
        } 
    })
}


export default usersReducer