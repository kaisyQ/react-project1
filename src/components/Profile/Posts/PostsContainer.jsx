import { connect } from "react-redux"
import { createNewPostActionCreater } from "../../../redux/profile-reducer"

import Posts from "./Posts"


const mapStateToProps = (state) => { return { postPageData: state.postPageData } }
const mapDispatchToProps = { createNewPost: createNewPostActionCreater }

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer