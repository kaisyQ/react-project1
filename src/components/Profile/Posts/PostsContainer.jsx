import { connect } from "react-redux"
import { createNewPost } from "../../../redux/profile-reducer"
import { getPosts } from "../../../redux/selectors/profile-selector"
import Posts from "./Posts"

const mapStateToProps = (state) => ({ posts: getPosts(state) })
const mapDispatchToProps = { createNewPost }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)