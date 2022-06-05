const CREATE_NEW_MESSAGE = 'CREATE-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const DEFAULT_MESSAGE_TEXT = 'Yo Hi ! _:'

const dialogsReducerMethods = {
    newMessTextareaUpdade (state, text) {
        return {
            ...state,
            newMessText: text
        }
    },
    createNewMessage (state) {
        return {
            ...state,
            messages: [...state.messages, state.newMessText],
            newMessText: ''
        }
    }
}

const defaultStateValue =  {
    dialogs : ['Vasua', 'Dima', 'Maxim'],
    messages : [
        'first message',
        '2 message',
        '3 message',
        '4 message',
        'sad mess'
        ],
    newMessText: DEFAULT_MESSAGE_TEXT
}

const dialogsReducer = (state=defaultStateValue, action) => {
    switch (action.type) {
        case CREATE_NEW_MESSAGE:
            return dialogsReducerMethods.createNewMessage(state)
        case UPDATE_NEW_MESSAGE_TEXT:
            return dialogsReducerMethods.newMessTextareaUpdade(state, action.text)
        default:
            return state
    }
}


export default dialogsReducer