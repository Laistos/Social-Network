import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'



function Profile() {
   return (
      <div className={styles.wrapper}>
         <ProfileInfo avatar={'https://i.pinimg.com/564x/0b/43/6f/0b436f89570588b544edd671511c3b55.jpg'} />
         <MyPosts />
      </div>
   )
}

export default Profile