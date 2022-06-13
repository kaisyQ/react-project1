import { authAPI } from "../api/api"

const CHANGE_ISAUTH_VALUE = 'CHANGE-ISAUTH-VALUE'
const LOGOUT = 'LOGOUT'

const defaultStateValue = {
    isAuth:false,
    userData: null
}

const authReducer = (state=defaultStateValue, action) => {
    switch(action.type) {
        case CHANGE_ISAUTH_VALUE:
            return {
                ...state,
                userData: action.userData,
                isAuth: action.newIsAuthValue
            }
        case LOGOUT:
            return {
                ...state, 
                isAuth:false,
                userData: null
            }
        default:
            return state
    }
}

export const isAuthActionCreater = (newIsAuthValue, userData) => {
    return {type: CHANGE_ISAUTH_VALUE, newIsAuthValue: newIsAuthValue, userData: userData}
} 

export const LogoutActionCreater = () => {
    return {type: LOGOUT}
}


export const isAuthThunk = () => (dispatch) => {
    authAPI.checkAuthMe().then(response => {
        dispatch(isAuthActionCreater(true, response.data))
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            authAPI.checkAuthMe().then(response => {
                dispatch(isAuthActionCreater(true, response.data))
                dispatch()
            })
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(LogoutActionCreater())
        }
    })
}


export default authReducer