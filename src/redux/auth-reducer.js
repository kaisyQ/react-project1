import { authAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth:false,
        email: null, 
        login: null,
        id: null,
        isFetching: false
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = action.payload.isAuth
            state.id = action.payload.id
            state.email = action.payload.email
            state.login = action.payload.login
        },
        logout: (state, action) => {
            state.isAuth = false
            state.id = null
            state.email = null
            state.login = null
        },
        changeFetching: (state, action) => {
            state.isFetching = action.payload
        }
    }
})

export const { login, logout, changeFetching } = authSlice.actions

export const CheckMe = () => (dispatch) => {
    dispatch(changeFetching(true))
    authAPI.checkAuthMe().then(response => {
        dispatch(login({
            isAuth: true, 
            id: response.data.data.id,
            email: response.data.data.email,
            login: response.data.data.login
        }))
    })
    dispatch(changeFetching(false))
}

export const Login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            authAPI.checkAuthMe().then(response => {
                dispatch(login({
                    isAuth: true, 
                    id: response.data.data.id,
                    email: response.data.data.email,
                    login: response.data.data.login
                }))
            })
        }
    })
}

export const Logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(logout())
        }
    })
}


export default authSlice.reducer