import { followAPI, usersAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
    name: 'users', 
    initialState: {
        usersToShow: [],
        currentPage: 1,
        pageCount: 20,
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
                .map(user => user.id === action.payload ? ({ ...user, followed: !user.followed }) : user)
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


export default usersSlice.reducer