import { authAPI, profileAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        posts: [],
        id: null,
        firstname: null,
        lastname: null,
        aboutMe: null,
        aboutMyJob: null, 
        status: null,
        links: null
    },
    reducers: {
        createNewPost: (state, action) => {
            state.posts.push({
                id: state.posts.length + 1,
                text: action.payload
            })
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        setProfile: (state, action) => {
            state.status = action.payload.status
            state.posts = action.payload.posts
            state.aboutMe = action.payload.aboutMe
            state.aboutMyJob = action.payload.aboutMyJob
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.id = action.payload.id
        
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

export const { deletePost, createNewPost, setProfile, setProfileStatus, updateStatus } = profileSlice.actions


export const createNewPostThunk = (id, text) => async (dispatch) => {
    const response = await profileAPI.createPost(id, text)
    if (response.data.resultCode === 0) {
        dispatch(createNewPost({
            text, 
            id: response.data.responsePost.id
        }))
    }
}

export const deletePostThunk = (id) => async (dispatch) => {
    const response = await profileAPI.deletePost(id)
    if (response.data.resultCode === 0) {
        dispatch(deletePost(id))
    }
}


export const setProfileThunk = (userId) => async (dispatch) => {
    if (!userId) {
        const response = await authAPI.checkAuthMe()
        const data = JSON.parse(response.data)
        if (data.resultCode === 0) {
            const profileResponse = await profileAPI.getProfile(data.user.id)
            dispatch(setProfile(JSON.parse(profileResponse.data)))
        } else {
            console.error('cannot read profile')
        }
        
    } else {
        const profileResponse = await profileAPI.getProfile(userId)
        dispatch(setProfile(JSON.parse(profileResponse.data)))
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