import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
   return (
      <div className={styles.wrapper}>
         MyPosts
         <div className={styles.addPost}>
            <textarea className={styles.textarea}>New Post</textarea>
            <button className={styles.button}>Add Post</button>
         </div>
         <Post />
         <Post />
         <Post />
      </div>
   )
}

export default MyPosts