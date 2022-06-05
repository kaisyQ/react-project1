const LOAD_USERS = 'LOAD-USERS'
const FOLLOW_USER = 'FOLLOW-USER'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const CHANGE_FETCHING = 'CHANGE-FETCHING'

const defaultStateValue = {
    usersToShow: [],
    currentPage: 1,
    pageCount: 20,
    totalCount: 0,
    isFetching: true,
}

export const usersActionCreater = {
    loadUsers: (newUsers) => { return {type: LOAD_USERS, newUsers: newUsers} },
    follow: (id) => { return {type: FOLLOW_USER, userId: id} },
    changeCurrentPage: (pageNumber) => { return {type: CHANGE_CURRENT_PAGE, pageNumber: pageNumber} },
    totalCount: (number) => {return {type: SET_TOTAL_COUNT, totalCount:number} },
    changeFetching: (changeHow) => { return {type:CHANGE_FETCHING, changeHow:changeHow} }
}

const usersReducer = (state=defaultStateValue, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                usersToShow: action.newUsers
            }
        case FOLLOW_USER: 
            return {
                ...state,
                usersToShow: state.usersToShow.map(user => {
                    if (user.id === action.userId) return {...user, followed: !user.followed}
                    else return user
                })
            }
        case CHANGE_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, 
                totalCount: action.totalCount
            }
        case CHANGE_FETCHING:
            return {
                ...state,
                isFetching: action.changeHow
            }
        default:
            return state;
    }

}

export default usersReducer