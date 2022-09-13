import { authAPI } from "../api/api"

const CHANGE_ISAUTH = 'CHANGE-ISAUTH'
const LOGOUT = 'LOGOUT'

const defaultStateValue = {
    isAuth:false,
    userData: null
}

const authReducer = (state=defaultStateValue, action) => {
    switch(action.type) {
        case CHANGE_ISAUTH:
            return {
                ...state,
                userData: action.userData,
                isAuth: action.newIsAuthValue
            }
        case LOGOUT:
            return {
                ...state, 
                isAuth: false,
                userData: null
            }
        default:
            return state
    }
}

export const login = (isAuth, userData) => ({ type: CHANGE_ISAUTH, isAuth, userData })
export const logout = () => ({ type: LOGOUT })


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


export default authReducer