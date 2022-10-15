import { followAPI, usersAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
    name: 'users', 
    initialState: {
        usersToShow: [],
        currentPage: 1,
        pageCount: 10,
        totalCount: 0,
        isFetching: true,
        userInFollowingProcess: []
    },
    reducers: {
        loadUsers: (state, action) => {
            state.usersToShow = action.payload
        },
        follow: (state, action) => {
            state.usersToShow = state.usersToShow
                .map(user => user.id === action.payload ? ({ ...user, isFollowed: !user.isFollowed }) : user)
        },
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        changeFetching: (state, action) => {
            state.isFetching = action.payload
        },
        totalCount: (state, action) => {
            state.totalCount = action.payload
        },
        pushUserToFollowArr: (state, action) => {
            state.userInFollowingProcess.push(action.payload)
        },
        deleteUserInFollowArr: (state, action) => {
            state.userInFollowingProcess = state.userInFollowingProcess
                .filter((userId) => userId !== action.payload)
        }
    }
})

export const { 
    loadUsers, 
    follow, 
    changeCurrentPage, 
    totalCount, 
    changeFetching, 
    pushUserToFollowArr, 
    deleteUserInFollowArr
} = usersSlice.actions


export const getUsers = (page) => async (dispatch) => {
    dispatch(changeFetching(true))
    const response = await usersAPI.getUsersFromServer(page)
    if (response.data.resultCode === 0) {
        dispatch(totalCount(response.data.responseUsers.length))
        dispatch(loadUsers(response.data.responseUsers))
    }
    dispatch(changeFetching(false))
}

export const getUserAtNumPage = (page) => async (dispatch) => {
    dispatch(changeFetching(true))
    const response = await usersAPI.getPageUsersFromServer(page)
    if (response.data.resultCode === 0) {
        dispatch(loadUsers(response.data.responseUsers))
    }
    dispatch(totalCount(response.data.responseUsers.length))
    dispatch(changeFetching(false))
}

export const makeUserFollowed = (id) => async (dispatch) => {
    dispatch(pushUserToFollowArr(id))
    const response = await followAPI.followUser(id)
    if (response.data.resultCode === 0) {
        dispatch(deleteUserInFollowArr(id)) 
        dispatch(follow(id))  
    } 
}

export const makeUserUnfollowed = (id) => async (dispatch) => {
    dispatch(pushUserToFollowArr(id))
    const response = await followAPI.unfollowUser(id)
    if (response.data.resultCode === 0) {
        dispatch(deleteUserInFollowArr(id)) 
        dispatch(follow(id))  
    } 
}

export default usersSlice.reducer