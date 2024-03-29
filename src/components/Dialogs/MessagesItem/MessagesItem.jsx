import styles from './MessagesItem.module.css'

export const MessagesItem = (props) => {
   return (
      <div className={styles.message}>{props.message}</div>
   )
}