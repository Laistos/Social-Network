import styles from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import { MessagesItem } from './MessagesItem/MessagesItem'

const Dialogs = (props) => {

   let dialogs = props.store.getState().messagesPage

   let dialogsElements = dialogs.dialogs.map((dialog) => { return <DialogsItem name={dialog.name} id={dialog.id} /> })
   let messagesElement = dialogs.messages.map((message) => { return <MessagesItem message={message.message} store={props.store}/> })
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