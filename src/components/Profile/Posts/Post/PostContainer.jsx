import { connect } from "react-redux"
import { deletePostThunk as deletePost } from "../../../../redux/profile-reducer"
import Post from "./Post"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)