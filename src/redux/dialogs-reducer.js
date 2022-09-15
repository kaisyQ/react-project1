import { createSlice } from "@reduxjs/toolkit"


const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        chats : ['First user', 'Second user', 'Third user'],
        messages : ['1 message', '2 message', '3 message', '4 message', '5 message']
    },
    reducers: {
        createMessage: (state, action) => {
            state.messages.push(action.payload)
        }
    }
})

export const { createMessage } = dialogsSlice.actions

export default dialogsSlice.reducer