import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
   let posts = props.postInfo.map((post) => { return <Post message={post.message} likes={post.likes} /> })
   return (
      <div className={styles.wrapper}>
         MyPosts
         <div className={styles.addPost}>
            <textarea className={styles.textarea}>New Post</textarea>
            <button className={styles.button}>Add Post</button>
         </div>
         {posts}
      </div>
   )
}

export default MyPosts