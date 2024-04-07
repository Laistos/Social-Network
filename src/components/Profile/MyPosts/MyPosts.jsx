import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let profile = props.store.getState().profilePage

    let posts = profile.post.map((post) => {
        return <Post message={post.message} likes={post.likes}/>
    })

    let newPostElement = React.createRef()
    let addPost = () => {
        props.store.addNewPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.store.updatePostText(text)
    }

    return (
        <div className={styles.wrapper}>
            MyPosts
            <div className={styles.addPost}>
                <textarea onChange={onPostChange} className={styles.textarea}
                          ref={newPostElement} value={profile.newPostText} />
                <button className={styles.button} onClick={addPost}>Add Post</button>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts
