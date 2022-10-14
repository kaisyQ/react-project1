import { authAPI } from "../api/api"
import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        email: null, 
        firstname: null,
        lastname: null,
        id: null,
        isFetching: false
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
        },
        logout: (state, action) => {
            state.isAuth = false
            state.id = null
            state.email = null
            state.firstname = null
            state.lastname = null
            document.cookie = ''
        },
        changeFetching: (state, action) => {
            state.isFetching = action.payload
        },
        register: (state, action) => {
            state.isAuth = true
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
        }
    }
})

export const { login, logout, changeFetching, register } = authSlice.actions


export const Register = (values) => async (dispatch) => {
    dispatch(changeFetching(true))
    const response = await authAPI.register({...values.values})
    const data = JSON.parse(response.data)
    if (data.resultCode === 0) {
        document.cookie = data.token
        dispatch(register({
            id : data.user.id, 
            firstname: data.user.firstname,
            lastname: data.user.lastname,
            email: data.user.email
        }))
    }
    dispatch(changeFetching(false))
}


export const Login = (email, password, rememberMe) => async (dispatch) => {
    dispatch(changeFetching(true))
    const response = await authAPI.login(email, password, rememberMe)
    const data = response.data
    if (data.resultCode === 0) {
        document.cookie = data.token
        dispatch(login({
            id: data.user.id,
            email: data.user.email,
            firstname: data.user.firstname,
            lastname: data.user.lastname
        }))
    }
    dispatch(changeFetching(false))
}

export const logoutThunk = () => async (dispatch) => { 
    dispatch(changeFetching(true))
    dispatch(logout())
    dispatch(changeFetching(false))
}


export default authSlice.reducer