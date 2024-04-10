import styles from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import {MessagesItemContainer} from "./MessagesItem/MessagesItemContainer";

const Dialogs = (props) => {
   let state = props.store.getState()

   let dialogsElements = state.dialogsReducer.dialogs.map((dialog) => { return <DialogsItem name={dialog.name} id={dialog.id} /> })
   let messagesElement = state.dialogsReducer.messages.map((message) => { return <MessagesItemContainer store={props.store}
                                                                                                        message={message.message}/> })
   return (
      <div className={styles.wrapper}>
         <div className={styles.items}>
            <div className={styles.dialog_container}>
               {dialogsElements}
            </div>
            <div className={styles.message_container}>
               {messagesElement}
            </div>
         </div>
      </div >
   )
}

export default Dialogs