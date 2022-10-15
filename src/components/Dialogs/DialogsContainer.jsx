import Dialogs from './Dialogs'
import withAuthRedirectContainer from "../../hoc/withAuthRedirect"
import { connect } from "react-redux"
import { getIsAuth } from "../../redux/selectors/auth-selector"
import { getChats } from "../../redux/selectors/dialogs-selector"
import { setFriendsThunk as setFriends } from '../../redux/dialogs-reducer'

const mapStateToProps = (state) => ({ chats: getChats(state), isAuth: getIsAuth(state)})
const mapDispatchToProps = {
    setFriends
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectContainer(Dialogs))