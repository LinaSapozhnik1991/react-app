
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state)=>{
  return {
    dialogsPage: state.dialogsPage,
    newMessageBody: state.dialogsPage.newMessageBody
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewMessageBody :(body)=>{
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage:()=>{
      dispatch(sendMessageCreator())
    }
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;