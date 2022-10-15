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
        return instance.get(`users/${page}`)
    },
    getPageUsersFromServer(page) {
        return instance.get(`users/${page}`)
    }
}

export const profileAPI = {
    getProfile (id) {
        return instance.get(`profile/${id}`)
    },
    updateMyStatus(status) {
        return instance.patch('profile/status', { status })
    },
    createPost(id, text) {
        return instance.post('post', { id, text })
    },
    deletePost(id) {
        return instance.delete(`post/${id}`)
    },
    updatePost(id, text) {
        return instance.patch(`post`, { id, text })
    },
    editProfileInfo(aboutMe, aboutMyJob, vk, twitter, facebook) {
        return instance.put('profile', { aboutMe, aboutMyJob, vk, twitter, facebook })
    }
}
 
export const followAPI = {
    getInfoAboutFollowing (id) {
        return instance.get(`follow/${id}`)
    },
    followUser (id) {
        return instance.patch(`follow`, {id})
    },
    unfollowUser (id) {
        return instance.patch(`unfollow`, {id})
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


export const dialogsApi = {
    getFriends(){
        return instance.get('friends')
    }
}