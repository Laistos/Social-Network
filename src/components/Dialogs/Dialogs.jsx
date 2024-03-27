import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogsItem = (props) => {
   let path = '/messages/' + props.id
   return (
      <div className={styles.item}>
         <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
         <NavLink to={path} className={styles.username}>{props.name}</NavLink>
      </div>
   )
}

const MessagesItem = (props) => {
   return (
      <div className={styles.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {

   let dialogsData = [
      { id: 1, name: 'Asta' },
      { id: 2, name: 'Yuno' },
      { id: 3, name: 'Robin' },
      { id: 4, name: 'JoGoat' },
      { id: 5, name: 'MiwaGoat' },
   ]

   let messagesData = [
      { message: 'Я СТАНУ КОРОЛЕМ МАГОВ' },
      { message: 'Не слушай Асту. Королем магов стану я!' },
      { message: 'If i could stop one heart from breaking' },
      { message: 'Между небом и землей лишь я один достойный' },
      { message: 'Между небом и землей лишь я одна достойна' },
   ]

   let dialogsElements = dialogsData.map((dialog) => { return <DialogsItem name={dialog.name} id={dialog.id} /> })

   let messagesElement = messagesData.map((message) => { return <MessagesItem message={message.message} /> })

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