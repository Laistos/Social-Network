import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/reducer/profileReducer";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text))
    }

    return (
        <MyPosts post={state.profileReducer.post}
                 newPostText={state.profileReducer.newPostText}
                 addPost={addPost}
                 onPostChange={onPostChange}
        />
    )
}

export default MyPostsContainer