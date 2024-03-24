import styles from './Post.module.css'

const Post = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.post}>
            <div className={styles.avaText}>
               <div className={styles.avatar}>
                  <img src='https://i.pinimg.com/564x/0b/43/6f/0b436f89570588b544edd671511c3b55.jpg' alt='#' />
               </div>
               <div className={styles.text}>post 1</div>
            </div>
            <div className={styles.like}>likes 15</div>
         </div>
      </div>
   )
}

export default Post;