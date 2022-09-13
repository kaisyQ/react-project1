const CREATE_NEW_MESSAGE = 'CREATE-NEW-MESSAGE'

const defaultStateValue =  {
    chats : ['First user', 'Second user', 'Third user'],
    messages : ['1 message', '2 message', '3 message', '4 message', '5 message']
}

const dialogsReducer = (state=defaultStateValue, action) => {
    const { type } = action

    switch (type) {
        case CREATE_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.text],
            }
        default:
            return state
    }
}


export const createNewMessage = (text) => ({ type: CREATE_NEW_MESSAGE, text })

export default dialogsReducer