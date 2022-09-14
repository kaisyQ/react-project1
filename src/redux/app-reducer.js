import { authAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice ({
    name: 'app',
    initialState: {
        isAuth: false,
        email: null, 
        login: null,
        id: null,
        isFetching: true
    },
    reducers: {
        checkIsAuth: (state, action) => {
            state.isAuth = action.payload.isAuth
            state.email = action.payload.email
            state.login = action.payload.login
            state.id = action.payload.id
        },
        changeFetching: (state, action) => {
            state.isFetching = action.payload
        }
    }
})

export const { checkIsAuth, changeFetching } = appSlice.actions

export const appIsAuthThnk = () => (dispatch) => {
    console.log('here')
    dispatch(changeFetching(true))
    authAPI.checkAuthMe().then(response => {
        if (response.data.data.id && response.data.data.email && response.data.data.login) {
            dispatch(checkIsAuth({
                isAuth: true, 
                email: response.data.data.email, 
                login: response.data.data.login, 
                id: response.data.data.id
            }))
        } else {
            dispatch(checkIsAuth({ isAuth: false, email: null, login: null, id: null }))
        }
        dispatch(changeFetching(false))

    })
}

export default appSlice.reducer