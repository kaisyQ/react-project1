import axios from "axios" 

const instance = axios.create( {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '53f39b58-59d2-40fb-8ccf-c6e55e608968'
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

export const profileAPI = {
    getProfile (id) {
        return instance.get(`profile/${id}`)
    },
    getUserStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    putMyStatus(status) {
        return instance.put('profile/status', {status})
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
        return instance.get('auth/me')
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}
