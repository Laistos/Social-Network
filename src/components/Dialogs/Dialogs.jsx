import styles from './Dialogs.module.css'

const Dialogs = (props) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.items}>
            <div className={styles.item_container}>
               <div className={styles.item}>
                  <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
                  <div className={styles.username}>Asta</div>
               </div>
               <div className={styles.message}>Sup</div>
            </div>
            <div className={styles.item_container}>
               <div className={styles.item}>
                  <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
                  <div className={styles.username}>Denji</div>
               </div>
               <div className={styles.message}>HEY</div>
            </div>
            <div className={styles.item_container}>
               <div className={styles.item}>
                  <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
                  <div className={styles.username}>Robin</div>
               </div>
               <div className={styles.message}>Я СПОЮ</div>
            </div>
            <div className={styles.item_container}>
               <div className={styles.item}>
                  <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
                  <div className={styles.username}>JoGoat</div>
               </div>
               <div className={styles.message}>Между небм и землей лишь я один достойный</div>
            </div>
            <div className={styles.item_container}>
               <div className={styles.item}>
                  <img src='https://i.pinimg.com/564x/5f/08/0f/5f080f434045bf2e813c6477a4598468.jpg' alt='#' />
                  <div className={styles.username}>MiwaGoat</div>
               </div>
               <div className={styles.message}>Между небом и землей лишь я одна достойна</div>
            </div>
         </div>
      </div >
   )
}

export default Dialogs