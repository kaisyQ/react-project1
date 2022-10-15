import { createSlice } from "@reduxjs/toolkit"


const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        chats : ['First user', 'Second user', 'Third user'],
        messages : []
    },
    reducers: {
        updateMessages: (state, action) => {
            state.messages = action.payload 
        }        
    }
})

export const { updateMessages } = dialogsSlice.actions

export default dialogsSlice.reducer