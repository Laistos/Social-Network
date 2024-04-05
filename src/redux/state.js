import {rerenderEntireTree} from "../render";


export let state = {
    profilePage: {
        post: [
            {id: 1, message: 'Hey! Sup guys!', likes: 15},
            {id: 2, message: 'you want to play lets play! OMG Im in love with this chamber voiceline', likes: 50},
        ],
        newPostText: '',
    },
    messagesPage: {
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
    },
    friendsPage: {
        friends: [
            {id: 1, name: 'Akezhan'},
            {id: 2, name: 'Alisher'},
            {id: 3, name: 'Alimzhan'},
        ],
    }
}

window.state = state

export let addNewPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likes: 20
    };
    state.profilePage.post.push(newPost)
    updatePostText('')
    rerenderEntireTree(state)
}

export let addMessage = (message) => {
    let newMessage ={
        message: message
    }
    state.messagesPage.messages.push(newMessage)
    rerenderEntireTree(state)
}

export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let onTextareaChange = () => {

}