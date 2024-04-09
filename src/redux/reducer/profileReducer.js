const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    post: [
        {id: 1, message: 'Hey! Sup guys!', likes: 15},
        {id: 2, message: 'you want to play lets play! OMG Im in love with this chamber voiceline', likes: 50},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST:
            let newState = structuredClone(state)
            let newPost = {
                id: 3,
                message: newState.newPostText,
                likes: 20
            };
            newState.post.push(newPost)
            newState.newPostText = ''
            return newState
        case UPDATE_POST_TEXT:
            // state.newPostText = action.newText
            // return state
            return {
                ...state,
                newPostText: action.newText
            };
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