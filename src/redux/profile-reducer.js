import { authAPI, profileAPI } from "../api/api"

const DEFAULT_POST_TEXT = 'Write here something new'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'



const defaultStateValue = {
    posts: ['This is my first post', 'Hello, im fine ! :) '],
    newPostText: DEFAULT_POST_TEXT,
    profile: null,
    status: ''
} 


const profileReducer = (state=defaultStateValue, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, state.newPostText],
                newPostText: DEFAULT_POST_TEXT
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
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
        default:
            return state
    }
}

export const setProfileActionCreater = (profile) => {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}
export const setProfileStatusActionCreater = (status) => {
    return {
        type: SET_PROFILE_STATUS,
        status: status
    }
}


export const setProfileThunk = (userId) => (dispatch) => {
    if (!userId) {
        authAPI.checkAuthMe().then(response => {
            if (response.data.resultCode === 0) {
                profileAPI.getProfile(response.data.data.id).then(response => {
                    dispatch(setProfileActionCreater(response.data))
                })
            } else {
                console.error('err')
            }
        })
    } else {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setProfileActionCreater(response.data))
        })
    }
}

export const setProfileStatusThunk = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setProfileStatusActionCreater(response.data))
    })
}

export default profileReducer