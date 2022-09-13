import Dialogs from './Dialogs'
import withAuthRedirectContainer from "../../hoc/withAuthRedirect"
import { connect } from "react-redux"
import { createNewMessage } from "../../redux/dialogs-reducer"
import { getIsAuth } from "../../redux/selectors/app-selector"
import { getChats, getMessages } from "../../redux/selectors/dialogs-selector"

const mapStateToProps = (state) => ({ chats: getChats(state), messages: getMessages(state), isAuth: getIsAuth(state)})
const mapDispatchToProps = { createNewMessage }

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectContainer(Dialogs))