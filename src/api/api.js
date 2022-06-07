import axios from "axios" 

const instance = axios.create( {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0f42339c-8c45-4d01-8de8-9007b7db8bf6'
    }
} )


export const usersAPI = {
    getUsersFromServer (page) {
        return instance.get(`users/?page=${page}`)
    },
    getPageUsersFromServer(page, count) {
        return instance.get(`users/?page=${page}&count=${count}`)
    }
}
 
export const followAPI = {
    getInfoAboutFollowing (id) {
        return instance.get(`follow/${id}`)
    },
    followUser (id) {
        return instance.post(`follow/${id}`, {})
    },
    unfollowUser (id) {
        return instance.delete(`follow/${id}`)
    }
}


class BaseAPI {
    constructor(entryPoint, dataParams) {
        this._entryPoint = entryPoint
        this._dataParams = dataParams
    }

    getDataFromServer() {
        return instance.get(`${this._entryPoint} + ${ this._dataParams ? this._dataParams.id.toString() : '' }`)
    }  
}

class UsersAPI extends BaseAPI{}

class FollowAPI extends BaseAPI{
}