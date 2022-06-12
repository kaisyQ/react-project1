import { connect } from "react-redux"
import { createNewMessageActionCreater } from "../../redux/dialogs-reducer"
import Dialogs from './Dialogs'
import withAuthRedirectContainer from "../../hoc/withAuthRedirect"

let mapStateToProps = (state) => {
    return { 
        dialogsPageData: state.dialogsPageData,
        isAuth: state.app.isAuth 
    }
}

const mapDispatchToProps = { createNewMessage: createNewMessageActionCreater }

const RedirectDialogContainer = withAuthRedirectContainer(Dialogs)

const DialogContainer = connect( mapStateToProps, mapDispatchToProps )( RedirectDialogContainer )

export default DialogContainer