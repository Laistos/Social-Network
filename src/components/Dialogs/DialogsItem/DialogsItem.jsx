import styles from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom'

export const DialogsItem = (props) => {
   let path = '/messages/' + props.id

   return (
      <div className={styles.item}>
         <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
         <NavLink to={path} className={styles.username}>{props.name}</NavLink>
      </div>
   )
}


