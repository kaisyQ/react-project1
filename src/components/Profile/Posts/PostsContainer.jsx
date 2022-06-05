import { connect } from "react-redux"
import actionCreater from "../../../redux/action-creater"

import Posts from "./Posts"


let mapStateToProps = (state) => {
    return { postPageData: state.postPageData }
}


let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextarea: (text) => { dispatch(actionCreater.updateNewPost(text))},
        createNewPost: () => { dispatch(actionCreater.createNewPost()) }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer