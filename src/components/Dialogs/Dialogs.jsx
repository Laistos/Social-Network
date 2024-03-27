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

const MessageItem = (props) => {
   return (
      <div className={styles.message_contsainer}>
         <div className={styles.message}>{props.message}</div>
      </div>
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

   return (
      <div className={styles.wrapper}>
         <div className={styles.items}>
            <div className={styles.item_container}>
               <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
               <MessageItem message={messagesData[0].message} />
            </div>
            <div className={styles.item_container}>
               <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
               <MessageItem message={messagesData[1].message} />
            </div>
            <div className={styles.item_container}>
               <DialogsItem name={'Robin'} id={3} />
               <MessageItem message={'If i could stop one heart from breaking'} />
            </div>
            <div className={styles.item_container}>
               <DialogsItem name={'JoGoat'} id={4} />
               <MessageItem message={'Между небом и землей лишь я один достойный'} />
            </div>
            <div className={styles.item_container}>
               <DialogsItem name={'MiwaGoat'} id={5} />
               <MessageItem message={'Между небом и землей лишь я одна достойна'} />
            </div>
         </div>
      </div >
   )
}

export default Dialogs