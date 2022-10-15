import { connect } from "react-redux"
import { deletePostThunk as deletePost } from "../../../../../redux/profile-reducer"
import { updatePostThunk as updatePost } from "../../../../../redux/profile-reducer"
import PostEditor from "./PostEditor"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { deletePost, updatePost }

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor)