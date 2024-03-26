import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogsItem = (props) => {

   let path = '/messages/' + props.id

   return (
      <div className={styles.item_container}>
         <div className={styles.item}>
            <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
            <NavLink to={path} className={styles.username}>{props.name}</NavLink>
         </div>
         <div className={styles.message}>{props.message}</div>
      </div>
   )
}

const Dialogs = (props) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.items}>
            <DialogsItem name={'Asta'} id={1} message={'Я СТАНУ КОРОЛЕМ МАГОВ'} />
            <DialogsItem name={'Yuno'} id={2} message={'Не слушай Асту. Королем магов стану я!'} />
            <DialogsItem name={'Robin'} id={3} message={'If i could stop one heart from breaking'} />
            <DialogsItem name={'JoGoat'} id={4} message={'Между небом и землей лишь я один достойный'} />
            <DialogsItem name={'MiwaGoat'} id={5} message={'Между небом и землей лишь я одна достойна'} />
         </div>
      </div >
   )
}

export default Dialogs