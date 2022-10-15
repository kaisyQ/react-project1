import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { setProfileThunk, updateUserStatus } from './../../redux/profile-reducer'
import { getProfile, getLinks } from './../../redux/selectors/profile-selector'
import { getIsAuth } from "../../redux/selectors/auth-selector"
import withAuthRedirectContainer from "../../hoc/withAuthRedirect"
import Profile from "./Profile"

const ProfileAPIContainer = ({ profile, links, updateUserStatus, setProfileThunk }) => {
    
    const { id } = useParams()
    
    useEffect(() => {
        setProfileThunk(id)
    }, [id])

    return <> 
        <Profile 
            updateUserStatus={updateUserStatus}
            profile={profile}
            links={links}
        />
    </>
    
}

const mapStateToProps = (state) => ({ 
    profile: getProfile(state), 
    links: getLinks(state), 
    isAuth: getIsAuth(state)
})
const mapDispatchToProps = { setProfileThunk, updateUserStatus }

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectContainer(ProfileAPIContainer))

