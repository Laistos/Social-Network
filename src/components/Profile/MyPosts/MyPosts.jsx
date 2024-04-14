import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let posts = props.post.map((post) => {
        return <Post message={post.message} likes={post.likes} key={post.id}/>
    })

    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
    }

    return (
        <div className={styles.wrapper}>
            MyPosts
            <div className={styles.addPost}>
                <textarea onChange={onPostChange} className={styles.textarea}
                          ref={newPostElement} value={props.newPostText}/>
                <button className={styles.button} onClick={addPost}>Add Post</button>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts
