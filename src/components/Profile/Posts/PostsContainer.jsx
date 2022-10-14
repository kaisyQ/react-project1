import { connect } from "react-redux"
import { createNewPostThunk as createNewPost } from "../../../redux/profile-reducer"
import { getId } from "../../../redux/selectors/auth-selector"
import { getPosts } from "../../../redux/selectors/profile-selector"
import Posts from "./Posts"

const mapStateToProps = (state) => ({ 
    posts: getPosts(state),
    currentUserId: getId(state)
})
const mapDispatchToProps = { createNewPost }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)