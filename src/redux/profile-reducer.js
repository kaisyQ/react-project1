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
                id: action.payload.id,
                text: action.payload.text
            })
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        updatePost: (state, action) => {
            state.posts = state.posts.map(post => {
                if(post.id === action.payload.id) {
                    post.text = action.payload.text
                }
                return post
            })
        },
        setProfile: (state, action) => {
            state.status = action.payload.status
            state.posts = action.payload.posts
            state.aboutMe = action.payload.aboutMe
            state.aboutMyJob = action.payload.aboutMyJob
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.id = action.payload.id

            state.links = action.payload.links

        },
        updateStatus: (state, action) => {
            state.status = action.payload
        },
        updateProfile: (state, action) => {
            state.aboutMe = action.payload.aboutMe
            state.aboutMyJob = action.payload.aboutMyJob
            state.links.vk = action.payload.vk
            state.links.facebook = action.payload.facebook
            state.links.twitter = action.payload.twitter
        }
    }
})

export const { deletePost, createNewPost, updatePost, setProfile, updateStatus, updateProfile } = profileSlice.actions


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

export const updatePostThunk = (id, text) => async (dispatch) => {
    const response = await profileAPI.updatePost(id, text)
    if (response.data.resultCode === 0) {
        dispatch(updatePost({
            text: response.data.responsePost.text,
            id: response.data.responsePost.id
        }))
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

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateMyStatus(status)
    if (response.resultCode === 0) {
        dispatch(updateStatus(status))
    }
}

export const updateProfileThunk = (values) => async (dispatch) => {
    const response = await profileAPI.editProfileInfo(values.aboutMe, values.aboutMyJob, values.vk, values.twitter, values.facebook)
    if (response.resultCode === 0) {
        dispatch(updateProfile({ 
            aboutMe: values.aboutMe, 
            aboutMyJob: values.aboutMyJob, 
            vk: values.vk, 
            twitter: values.twitter, 
            facebook: values.facebook 
        }))
    }
}


export default profileSlice.reducer 