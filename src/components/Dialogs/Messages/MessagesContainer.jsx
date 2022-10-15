import { connect } from "react-redux"
import { getFirstname, getId } from "../../../redux/selectors/auth-selector"
import { updateMessages } from "../../../redux/dialogs-reducer"
import { getMessages } from "../../../redux/selectors/dialogs-selector"
import Messages from "./Messages"

const mapStateToProps = (state) => ({
    currentUserId: getId(state),
    firstname: getFirstname(state),
    messages: getMessages(state)
})

const mapDispatchToProps = {
    updateMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)