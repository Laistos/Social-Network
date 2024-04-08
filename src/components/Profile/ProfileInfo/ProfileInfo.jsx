import styles from './ProfileInfo.module.css'
import image from '../../../images/background.jpeg'

const ProfileInfo = (props) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.image}>
            <img src={image} alt='#' />
         </div>
         <div className={styles.user}>
            <div className={styles.avatar}>
               <img src={props.avatar} alt='#' />
            </div>
            <div className={styles.userInfo}>
               <div className={styles.info}>Akezhan Sotsial</div>
               <div className={styles.info}>7 may</div>
               <div className={styles.info}>Almaty</div>
               <div className={styles.info}>IITU</div>
            </div>
         </div>
      </div>
   )
}
export default ProfileInfo