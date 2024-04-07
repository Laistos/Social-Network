export let store = {
    _state: {
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
    },
    getState(){
        return this._state
    },
    addNewPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likes: 20
        };
        this._state.profilePage.post.push(newPost)
        this.updatePostText('')
        this.notify()
    },
    addMessage(){
        let newMessage = {
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage)
        this.updateMessageText('')
        this.notify()
    },
    updatePostText(newText){
        this._state.profilePage.newPostText = newText
        this.notify()
    },
    updateMessageText(newText){
        this._state.messagesPage.newMessageText = newText
        this.notify()
    },
    subscribe(observer) {
        this._observer = observer
    },
    notify(){
        if(this._observer){
            this._observer(this._state)
        }
    }
}

window.store = store.getState()

