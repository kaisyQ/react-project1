import { createSlice } from "@reduxjs/toolkit"
import { dialogsApi } from "../api/api"


const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        chats : [],
        messages : []
    },
    reducers: {
        updateMessages: (state, action) => {
<<<<<<< HEAD
            state.messages = action.payload 
=======
            state.messages = state.messages.concat(action.payload) 
        },
        setFriends: (state, action) => {
            state.chats = action.payload
>>>>>>> e7fe077675c5bd98e4656a77fa3837f3e0d4acae
        }        
    }
})


export const { updateMessages, setFriends } = dialogsSlice.actions

export const setFriendsThunk = () => async (dispatch) => {
    const response = await dialogsApi.getFriends()
    if (response.data.resultCode === 0) {
        dispatch(setFriends(response.data.responseFriends.follows))
    }
}

export default dialogsSlice.reducer