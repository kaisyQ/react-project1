const CREATE_NEW_MESSAGE = 'CREATE-NEW-MESSAGE'

const defaultStateValue =  {
    dialogs : ['Vasua', 'Dima', 'Maxim'],
    messages : [ 'first message', '2 message', '3 message', '4 message', 'sad mess' ]
}

export const createNewMessageActionCreater = (text) => { return { type: CREATE_NEW_MESSAGE, text } }

const dialogsReducer = (state=defaultStateValue, action) => {
    switch (action.type) {
        case CREATE_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.text],
            }
        default:
            return state
    }
}


export default dialogsReducer