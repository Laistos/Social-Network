import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
   let posts = props.post.map((post) => { return <Post message={post.message} likes={post.likes} /> })

   let newPostElement = React.createRef() //создаем ссылку на элемент

   let addPost = () => {
      let text = newPostElement.current.value
      alert(text)
   }

   return (
      <div className={styles.wrapper}>
         MyPosts
         <div className={styles.addPost}>
            <textarea className={styles.textarea} ref={newPostElement} >New Post</textarea>     {/*newPostElement это ссылка на textarea*/}
            <button className={styles.button} onClick={addPost} >Add Post</button>
         </div>
         {posts}
      </div>
   )
}

export default MyPosts
