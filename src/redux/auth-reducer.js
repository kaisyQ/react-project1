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

export const CheckMe = () => async (dispatch) => {
    dispatch(changeFetching(true))
    const response = await authAPI.checkAuthMe()
    if (response.data.resultCode === 0) {
        dispatch(login({
            isAuth: true, 
            id: response.data.data.id,
            email: response.data.data.email,
            login: response.data.data.login
        }))
    }
    dispatch(changeFetching(false))
}

export const Login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        const response = await authAPI.checkAuthMe()
        dispatch(login({
            isAuth: true, 
            id: response.data.data.id,
            email: response.data.data.email,
            login: response.data.data.login
        }))
    }
}

export const logoutThunk = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(logout())
    }
}


export default authSlice.reducer