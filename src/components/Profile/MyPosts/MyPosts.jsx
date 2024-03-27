import styles from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {

   let postInfo = [
      { message: 'Hey! Sup guys!', likes: 15 },
      { message: 'you want to play lets play! OMG Im in love with this chamber voiceline', likes: 50 },
   ]

   let posts = postInfo.map((post) => { return <Post message={post.message} likes={post.likes} /> })


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