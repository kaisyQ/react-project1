const DEFAULT_POST_TEXT = 'Write here something new'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'



const defaultStateValue = {
    posts: ['This is my first post', 'Hello, im fine ! :) '],
    newPostText: DEFAULT_POST_TEXT,
    profile: null
} 

const profileReducerMethods = {
    createNewPost (state) {
        return {
            ...state,
            posts: [...state.posts, state.newPostText],
            newPostText: DEFAULT_POST_TEXT
        }
    },
    changeNewPostText (state, text) {
        return {
            ...state,
            newPostText: text
        }
    },
    setProfile(state, profile) {
        return {
            ...state, 
            profile: profile
        }
    }
}

const profileReducer = (state=defaultStateValue, action) => {
    switch (action.type) {
        case ADD_POST:
            return profileReducerMethods.createNewPost(state)
        case UPDATE_NEW_POST_TEXT:
            return profileReducerMethods.changeNewPostText(state, action.text)
        case SET_PROFILE:
            return profileReducerMethods.setProfile(state, action.profile)
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


export default profileReducer