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
        newMessageText: '',
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

let rerenderEntireTree = () => {
    console.log('state was changed')
}

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

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {
    let newMessage ={
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messages.push(newMessage)
    updateMessageText('')
    rerenderEntireTree(state)
}

export const updateMessageText = (newText) => {
    state.messagesPage.newMessageText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

