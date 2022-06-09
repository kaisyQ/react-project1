import { authAPI } from "../api/api"

const CHANGE_ISAUTH_VALUE = 'CHANGE-ISAUTH-VALUE'


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
        default:
            return state
    }
}

export const isAuthActionCreater = (newIsAuthValue, userData) => {
    return {type: CHANGE_ISAUTH_VALUE, newIsAuthValue: newIsAuthValue, userData: userData}
} 

export const isAuthThunk = () => (dispatch) => {
    authAPI.checkAuthMe().then(response => {
        dispatch(isAuthActionCreater(true, response.data))
    })
}

export default authReducer