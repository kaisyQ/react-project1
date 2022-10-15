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
            state.messages = action.payload
        },
        setFriends: (state, action) => {
            state.chats = action.payload
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