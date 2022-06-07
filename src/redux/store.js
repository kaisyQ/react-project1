import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers( {
        dialogsPageData: dialogsReducer,
        postPageData: profileReducer,
        usersPageData: usersReducer
    }
)

let store = createStore( reducers, applyMiddleware(thunk) )

export default store

window.store = store