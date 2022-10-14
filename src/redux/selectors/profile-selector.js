export const getLinks = (state) => state.profile.links

export const getProfile = (state) => ({
    firstname: state.profile.firstname,
    lastname: state.profile.lastname,
    aboutMe: state.profile.aboutMe,
    aboutMyJob: state.profile.aboutMyJob, 
    status: state.profile.status,
})

export const getPosts = (state) => state.profile.posts