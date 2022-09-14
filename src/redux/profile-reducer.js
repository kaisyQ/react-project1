import { authAPI, profileAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        posts: ['first post', 'second post'],
        profile: null,
        status: ''
    },
    reducers: {
        createNewPost: (state, action) => {
            state.posts.push(action.payload)
        },
        setProfile: (state, action) => {
            state.profile = action.payload
        },
        setProfileStatus: (state, action) => {
            state.status = action.payload
        },
        updateStatus: (state, action) => {
            state.status = action.payload
        }
    }
})

export const { createNewPost, setProfile, setProfileStatus, updateStatus } = profileSlice.actions


export const setProfileThunk = (userId) => (dispatch) => {
    if (!userId) {
        authAPI.checkAuthMe().then(response => {
            if (response.data.resultCode === 0) {
                profileAPI.getProfile(response.data.data.id).then(response => {
                    dispatch(setProfile(response.data))
                })
            } else {
                console.error('err')
            }
        })
    } else {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setProfile(response.data))
        })
    }
}

export const setProfileStatusThunk = (userId) => (dispatch) => {
    if (!userId) {
        authAPI.checkAuthMe().then(response => {
            if (response.data.resultCode === 0) {
                profileAPI.getUserStatus(response.data.data.id).then(response => {
                    dispatch(setProfileStatus(response.data))
                }) 
            } else {
                console.error('err')
            }
        })
    } else {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data))
        }) 
    }
}

export const updateCurrentUserProfileStatus = (status) => (dispatch) => {
    profileAPI.putMyStatus(status).then(response => {
        if (response.resultCode === 0) {
            dispatch(updateCurrentUserProfileStatus(status))
        }
    })
}

export default profileSlice.reducer