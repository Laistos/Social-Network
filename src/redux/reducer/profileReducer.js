const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 20
            };
            state.post.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    }
}
export default profileReducer