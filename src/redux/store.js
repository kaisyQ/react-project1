import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'


import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
import appReducer from './app-reducer'


const reducers = combineReducers( {
        dialogs: dialogsReducer,
        profile: profileReducer,
        users: usersReducer,
        auth: authReducer,
        app: appReducer
    }
)

let store = createStore( reducers, applyMiddleware(thunk) )

export default store
