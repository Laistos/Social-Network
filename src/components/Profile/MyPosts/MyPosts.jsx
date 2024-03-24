import styles from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
   return (
      <div className={styles.wrapper}>
         MyPosts
         <div className={styles.addPost}>
            <textarea className={styles.textarea}>New Post</textarea>
            <button className={styles.button}>Add Post</button>
         </div>
         <Post message={'Hey! Sup guys!'} like={15} />
         <Post message={'you want to play lets play! OMG Im in love with this chamber voiceline'} like={50} />
      </div>
   )
}

export default MyPosts