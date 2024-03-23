import styles from './Profile.module.css'

const Profile = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.image}>
            <img src='https://w.wallha.com/ws/14/oOKSTL6W.jpg' alt='#' />
         </div>
         <div className={styles.user}>
            <div className={styles.avatar}>
               <img src='https://i.pinimg.com/564x/0b/43/6f/0b436f89570588b544edd671511c3b55.jpg' alt='#' />
            </div>
            <div className={styles.userInfo}>
               <div className={styles.info}>Akezhan Sotsial</div>
               <div className={styles.info}>7 may</div>
               <div className={styles.info}>Almaty</div>
               <div className={styles.info}>IITU</div>
            </div>
         </div>
         <div>
            MyPosts
            <div>New post</div>
            <div>
               Posts
               <div>post1</div>
               <div>post2</div>
            </div>
         </div>
      </div>
   )
}

export default Profile