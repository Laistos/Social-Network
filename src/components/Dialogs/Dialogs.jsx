import styles from './Dialogs.module.css'

const Dialogs = (props) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.friend_info}>
            <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
            <div className={styles.username}>Asta</div>
         </div>
         <div className={styles.message}>
            {props.message}
         </div>
      </div>
   )
}

export default Dialogs