import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/reducer/profileReducer";
import {useContext} from "react";
import {StoreContext} from "../../../storeContext";

const MyPostsContainer = (props) => {
    const store = useContext(StoreContext)
    let state = store.getState()

    let addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        store.dispatch(updatePostActionCreator(text))
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