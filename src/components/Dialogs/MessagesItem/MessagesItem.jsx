import React from 'react'
import styles from './MessagesItem.module.css'

export const MessagesItem = (props) => {

   let newMessageElement = React.createRef()

   let addMessage = () => {
      let text = newMessageElement.current.value
      alert(text)
   }

   return (
      <div className={styles.message}>
         <div className={styles.message_text}>{props.message}</div>
         <div className={styles.add_message}>
            <textarea ref={newMessageElement} className={styles.textarea} name="" id="" cols="30" rows="10">some text</textarea>
            <button onClick={addMessage} className={styles.send_message}>Send</button>
         </div>
      </div>
   )
}