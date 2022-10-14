import axios from "axios" 

const instance = axios.create( {
    withCredentials: true,
    baseURL: 'http://localhost:4000/',
    headers: {
        'API-KEY': '53f39b58-59d2-40fb-8ccf-c6e55e608968'
    }
} )


export const usersAPI = {
    getUsersFromServer (page) {
        return instance.get(`users/?pageNumber=${page}`)
    },
    getPageUsersFromServer(page, size) {
        return instance.get(`users/?pageNumber=${page}&pageSize=${size}`)
    }
}

export const profileAPI = {
    getProfile (id) {
        return instance.get(`profile/${id}`)
    },
    getUserStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    putMyStatus(status) {
        return instance.put('profile/status', {status})
    },
    createPost(id, text) {
        return instance.post('post', { id, text })
    },
    deletePost(id) {
        return instance.delete(`post/${id}`)
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

export const authAPI = {
    checkAuthMe(){
        return instance.get('me')
    },
    login(email, password, rememberMe) {
        return instance.post('login', { email, password, rememberMe })
    },
    register({email, password, firstname, lastname}){
        return instance.post('register', { email, password, firstname, lastname })
    }
}
