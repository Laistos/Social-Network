import styles from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import { MessagesItem } from './MessagesItem/MessagesItem'

const Dialogs = (props) => {
   let dialogsElements = props.dialogs.dialogs.map((dialog) => { return <DialogsItem name={dialog.name} id={dialog.id} /> })
   let messagesElement = props.dialogs.messages.map((message) => { return <MessagesItem addMessage={props.addMessage}
                                                                                        message={message.message}
                                                                                        newMessageText={props.dialogs.newMessageText}
                                                                                        dispatch={props.dispatch}/> })
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