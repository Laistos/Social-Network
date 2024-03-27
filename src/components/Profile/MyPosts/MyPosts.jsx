import styles from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {

   let postInfo = [
      { message: 'Hey! Sup guys!', likes: 15 },
      { message: 'you want to play lets play! OMG Im in love with this chamber voiceline', likes: 50 },
   ]


   return (
      <div className={styles.wrapper}>
         MyPosts
         <div className={styles.addPost}>
            <textarea className={styles.textarea}>New Post</textarea>
            <button className={styles.button}>Add Post</button>
         </div>
         <Post message={postInfo[0].message} likes={postInfo[0].likes} />
         <Post message={postInfo[1].message} likes={postInfo[1].likes} />
      </div>
   )
}

export default MyPosts