export const getCurrentPage = (state) => state.users.currentPage
export const getTotalCount = (state) => state.users.totalCount
export const getPageCount = (state) => state.users.pageCount
export const getIsFetching = (state) => state.users.isFetching
export const getUserInFollowingProcess = (state) => [...state.users.userInFollowingProcess]
export const getUsersToShow = (state) => [...state.users.usersToShow]