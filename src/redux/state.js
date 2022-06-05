import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

const DEFAULT_POST_TEXT = 'Write here something new'
const DEFAULT_MESSAGE_TEXT = 'Yo Hi ! _:'

let store = {
    _state : {
        dialogsPageData : {
            dialogs : ['Vasua', 'Dima', 'Maxim'],
            messages : [
                'first message',
                '2 message',
                '3 message',
                '4 message',
                'sad mess'
                ],
            newMessText: DEFAULT_MESSAGE_TEXT
        },
        postPageData : {
            posts: ['This is my first post', 'Hello, im fine ! :) '],
            newPostText: DEFAULT_POST_TEXT
        }
    },
    getState () {
        return this._state
    },
    _renderTree () {
        console.log('STATE CHANGED')
    },
    dispatch (action) {
        this._state.dialogsPageData = dialogsReducer(this._state.dialogsPageData, action)
        this._state.postPageData = profileReducer(this._state.postPageData, action)
        this._renderTree()
    },
    subscribe (callback) {
        this._renderTree = callback
    }
}

export default store

window.state = store    