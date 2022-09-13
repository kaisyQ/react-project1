import { authAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'

const defaultStateValue = {
    posts: ['first post', 'second post'],
    profile: null,
    status: ''
} 

const profileReducer = (state=defaultStateValue, action) => {
    const { type } = action

    switch (type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.text]
            }
        case SET_PROFILE:
            return {
                ...state, 
                profile: action.profile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state, 
                status: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state,
                state: action.newStatus
            }
        default:
            return state
    }
}

export const createNewPost = (text) => ({ type: ADD_POST, text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status })
export const updateStatus = (newStatus) => ({ type: UPDATE_STATUS, newStatus})


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

export default profileReducer