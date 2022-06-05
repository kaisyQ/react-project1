const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const CREATE_NEW_MESSAGE = 'CREATE-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


const actionCreater = {
    createNewPost () { return { type: ADD_POST } },
    updateNewPost (text) { return { type: UPDATE_NEW_POST_TEXT, text: text } },
    createNewMessage () { return { type: CREATE_NEW_MESSAGE } },
    updateNewMessage (text) { return { type: UPDATE_NEW_MESSAGE_TEXT, text: text} }
}


export default actionCreater