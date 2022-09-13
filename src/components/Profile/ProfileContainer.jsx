import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { setProfileThunk, setProfileStatusThunk, updateCurrentUserProfileStatus } from './../../redux/profile-reducer'
import { getProfile, getStatus } from './../../redux/selectors/profile-selector'
import { getIsAuth } from "../../redux/selectors/app-selector"
import withAuthRedirectContainer from "../../hoc/withAuthRedirect"
import Profile from "./Profile"

const ProfileAPIContainer = ({ profile, status, updateCurrentUserProfileStatus, setProfileStatusThunk, setProfileThunk }) => {
    
    const { id } = useParams()
    
    useEffect(() => {
        setProfileThunk(id)
        setProfileStatusThunk(id)
    }, [])

    return <> 
        <Profile 
            updateCurrentUserProfileStatus={updateCurrentUserProfileStatus}
            profile={profile} 
            status={status}
        />
    </>
    
}

const mapStateToProps = (state) => ({ profile: getProfile(state), status: getStatus(state), isAuth: getIsAuth(state) })
const mapDispatchToProps = { setProfileThunk, setProfileStatusThunk, updateCurrentUserProfileStatus }

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectContainer(ProfileAPIContainer))

