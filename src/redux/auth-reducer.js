import { authAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth:false,
        userData: null
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = action.payload.isAuth
            state.userData = action.payload.userData
        },
        logout: (state, action) => {
            state.isAuth = false
            state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions

export const CheckMe = () => (dispatch) => {
    authAPI.checkAuthMe().then(response => {
        dispatch(login(true, response.data))
    })
}

export const Login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            authAPI.checkAuthMe().then(response => {
                dispatch(login(true, response.data))
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