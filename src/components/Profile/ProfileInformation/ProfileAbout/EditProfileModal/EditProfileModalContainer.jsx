import { connect } from "react-redux"
import { updateProfileThunk as updateProfile } from "../../../../../redux/profile-reducer"

import EditProfileModal from "./EditProfileModal"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { updateProfile }


export default connect(mapStateToProps, mapDispatchToProps)(EditProfileModal)