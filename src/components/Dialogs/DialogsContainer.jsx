import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/reducer/dialogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
   return{
      messagesPage: state.dialogsReducer
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addMessage: () => dispatch(addMessageActionCreator()),
      onMessageChange:(text) => dispatch(updateMessageActionCreator(text))
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer