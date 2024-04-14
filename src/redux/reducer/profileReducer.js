const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    post: [
        {id: 1, message: 'Hey! Sup guys!', likes: 15},
        {id: 2, message: 'you want to play lets play! OMG Im in love with this chamber voiceline', likes: 50},
    ],
    newPostText: '',
}
let nextId = 3;

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case  ADD_POST:
            return {
                ...state,
                post: [...state.post, {id: nextId++, message: state.newPostText, likes: 20}],
                newPostText: '',
            }
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