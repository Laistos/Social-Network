const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Asta'},
        {id: 2, name: 'Yuno'},
        {id: 3, name: 'Robin'},
        {id: 4, name: 'JoGoat'},
        {id: 5, name: 'MiwaGoat'},
    ],
    messages: [
        {message: 'Я СТАНУ КОРОЛЕМ МАГОВ'},
        {message: 'Не слушай Асту. Королем магов стану я!'},
        {message: 'If i could stop one heart from breaking'},
        {message: 'Между небом и землей лишь я один достойный'},
        {message: 'Между небом и землей лишь я одна достойна'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newState = structuredClone(state)
            let newMessage = {
                message: newState.newMessageText
            }
            newState.messages.push(newMessage)
            newState.newMessageText = ''
            return newState
        case UPDATE_MESSAGE_TEXT:
            // state.newMessageText = action.newText
            // return state
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text
    }
}
export default dialogsReducer