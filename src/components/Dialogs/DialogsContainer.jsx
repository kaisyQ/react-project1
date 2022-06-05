import React from "react"
import { connect } from "react-redux"
import actionCreater from "../../redux/action-creater"

import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return { dialogsPageData: state.dialogsPageData }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextarea: (text) => { 
            dispatch(actionCreater.updateNewMessage(text)) 
        },
        createNewMessage: () => { dispatch(actionCreater.createNewMessage()) }
    }
}


const DialogContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs )

export default DialogContainer