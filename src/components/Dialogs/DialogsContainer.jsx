import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/reducer/dialogsReducer";
import {useContext} from "react";
import {StoreContext} from "../../storeContext";

const DialogsContainer = (props) => {
   const store = useContext(StoreContext)
   let state = store.getState().dialogsReducer

   let addMessage = () => {
      store.dispatch(addMessageActionCreator())
   }

   let onMessageChange = (text) => {
      store.dispatch(updateMessageActionCreator(text))
   }

   return (
      <Dialogs addMessage={addMessage}
               onMessageChange={onMessageChange}
               state={state}/>
   )
}

export default DialogsContainer