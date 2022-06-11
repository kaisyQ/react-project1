import { connect } from "react-redux"
import actionCreater from "../../redux/action-creater"
import Dialogs from './Dialogs'
import withAuthRedirectContainer from "../../hoc/withAuthRedirect"

let mapStateToProps = (state) => {
    return { 
        dialogsPageData: state.dialogsPageData,
        isAuth: state.auth.isAuth 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextarea: (text) => { 
            dispatch(actionCreater.updateNewMessage(text)) 
        },
        createNewMessage: () => { dispatch(actionCreater.createNewMessage()) }
    }
}

const RedirectDialogContainer = withAuthRedirectContainer(Dialogs)

const DialogContainer = connect( mapStateToProps, mapDispatchToProps )( RedirectDialogContainer )

export default DialogContainer