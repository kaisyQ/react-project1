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
    const { type } = action
    switch(type) {
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

export const appIsAuth = (isAuth, email, login, id) => ({ type: CHECK_ISAUTH_TAKE_USER_DT, isAuth, email, login, id})
export const appisFetching = (isFetching) => ({ type: CHANGE_FETCHING, isFetching })
 
export const appIsAuthThnk = () => (dispatch) => {
    dispatch(appisFetching(true))
    authAPI.checkAuthMe().then(response => {
        if (response.data.data.id && response.data.data.email && response.data.data.login) {
            dispatch(appIsAuth(true, response.data.data.email, response.data.data.login, response.data.data.id))
        } else {
            dispatch(appIsAuth(false, null, null, null))
        }
        dispatch(appisFetching(false))

    })
}

export default appReducer