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
        {id: 1, message: 'Я СТАНУ КОРОЛЕМ МАГОВ'},
        {id: 2, message: 'Не слушай Асту. Королем магов стану я!'},
        {id: 3, message: 'If i could stop one heart from breaking'},
        {id: 4, message: 'Между небом и землей лишь я один достойный'},
        {id: 5, message: 'Между небом и землей лишь я одна достойна'},
    ],
    newMessageText: '',
}

let nextID = 5

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: nextID++, message: state.newMessageText}]
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