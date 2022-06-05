import { createStore, combineReducers } from 'redux'

import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers( {
        dialogsPageData: dialogsReducer,
        postPageData: profileReducer,
        usersPageData: usersReducer
    }
)

let store = createStore( reducers )

export default store

window.store = store