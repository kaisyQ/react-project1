import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'

import thunk from 'redux-thunk'


import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
import appReducer from './app-reducer'


let reducers = combineReducers( {
        dialogsPageData: dialogsReducer,
        postPageData: profileReducer,
        usersPageData: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
)

let store = createStore( reducers, applyMiddleware(thunk) )

export default store

window.store = store