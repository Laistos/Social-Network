import styles from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import { MessagesItem } from './MessagesItem/MessagesItem'

const Dialogs = (props) => {
   let dialogsElements = props.dialogsData.map((dialog) => { return <DialogsItem name={dialog.name} id={dialog.id} /> })
   let messagesElement = props.messagesData.map((message) => { return <MessagesItem message={message.message} /> })
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