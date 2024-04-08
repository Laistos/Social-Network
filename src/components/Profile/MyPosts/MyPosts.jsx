import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import {type} from "@testing-library/user-event/dist/type";

const MyPosts = (props) => {
    let posts = props.post.map((post) => {
        return <Post message={post.message} likes={post.likes}/>
    })

    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE-POST-TEXT', newText: text})
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
