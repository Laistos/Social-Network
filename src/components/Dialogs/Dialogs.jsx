import styles from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem'
import {MessagesItem} from "./MessagesItem/MessagesItem";
import React from "react";

const Dialogs = (props) => {
   let dialogsElements = props.messagesPage.dialogs.map((dialog) => { return <DialogsItem name={dialog.name} id={dialog.id} /> })
   let messagesElement = props.messagesPage.messages.map((messages) => { return <MessagesItem addMessage={props.addMessage}
                                                                                      onMessageChange={props.onMessageChange}
                                                                                      message={messages.message}
                                                                                      newMessageText={props.messagesPage.newMessageText}/> })


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