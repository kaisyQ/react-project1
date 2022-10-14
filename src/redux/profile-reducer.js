import { authAPI, profileAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        posts: ['first post', 'second post'],
        firstname: null,
        lastname: null,
        aboutMe: null,
        aboutMyJob: null, 
        status: null,
        links: null
    },
    reducers: {
        createNewPost: (state, action) => {
            state.posts.push(action.payload)
        },
        setProfile: (state, action) => {
            state.status = action.payload.status
            state.posts = action.payload.posts
            state.aboutMe = action.payload.aboutMe
            state.aboutMyJob = action.payload.aboutMyJob
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
        
            const toLinks = {
                vk: action.payload.vk,
                facebook: action.payload.facebook,
                twitter: action.payload.twitter
            }

            state.links = toLinks

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


export const setProfileThunk = (userId) => async (dispatch) => {
    if (!userId) {
        const response = await authAPI.checkAuthMe()
        const data = JSON.parse(response.data)
        if (data.resultCode === 0) {
            const profileResponse = await profileAPI.getProfile(data.user.id)
            console.log(profileResponse)
            dispatch(setProfile(JSON.parse(profileResponse.data)))
        } else {
            console.error('cannot read profile')
        }
        
    } else {
        const response = await profileAPI.getProfile(userId)
        dispatch(setProfile(response.data))
    }
}

export const setProfileStatusThunk = (userId) => async (dispatch) => {
    if (!userId) {
        const response = await authAPI.checkAuthMe()
        if (response.data.resultCode === 0) {
            const responseData = await profileAPI.getUserStatus(response.data.data.id)
            dispatch(setProfileStatus(responseData.data))
        } else {
            console.error('err')
        }
    } else {
        const response = await profileAPI.getUserStatus(userId)
        dispatch(setProfileStatus(response.data))
    }
}

export const updateCurrentUserProfileStatus = (status) => async (dispatch) => {
    const response = await profileAPI.putMyStatus(status)
    if (response.resultCode === 0) {
        dispatch(updateCurrentUserProfileStatus(status))
    }
}

export default profileSlice.reducer