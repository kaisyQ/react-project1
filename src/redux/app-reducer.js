import { authAPI } from "../api/api"

const CHECK_ISAUTH_TAKE_USER_DT = 'CHECK-ISAUTH-TAKE_USER_DT'
const CHANGE_FETCHING = 'CHANGE_FETCHING'

const defaultStateValue = {
    isAuth: false,
    email: null, 
    login: null,
    id: null,
    isFetching: true
}
const appReducer = (state=defaultStateValue, action) => {
    switch(action.type) {
        case CHECK_ISAUTH_TAKE_USER_DT:
            return {
                ...state,
                isAuth: action.isAuth,
                email: action.email,
                login: action.login,
                id: action.id
            }
        case CHANGE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const appIsAuth = (isAuth, email, login, id) => {
    return { type: CHECK_ISAUTH_TAKE_USER_DT, isAuth, email, login, id}
}

export const appisFetching = (isFetching) => { return { type: CHANGE_FETCHING, isFetching } }
 
export const appIsAuthThnk = () => (dispatch) => {
    dispatch(appisFetching(true))
    authAPI.checkAuthMe().then(response => {
        // check resultCode
        if (response.data.data.id && response.data.data.email && response.data.data.login) {
            dispatch(appIsAuth(true, response.data.data.email, response.data.data.login, response.data.data.id))
        } else {
            dispatch(appIsAuth(false, null, null, null))
        }
        dispatch(appisFetching(false))

    })
}

export default appReducer