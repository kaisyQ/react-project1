import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers( {
        dialogsPageData: dialogsReducer,
        postPageData: profileReducer,
        usersPageData: usersReducer,
        auth: authReducer
    }
)

let store = createStore( reducers, applyMiddleware(thunk) )

export default store

window.store = store