let store = {
    _state: {
        profilePage: {
            postData: [],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, userName: 'Roman'},
                {id: 2, userName: 'Aleksandra'},
                {id: 3, userName: 'Ekaterina'},
                {id: 4, userName: 'Artyom'}
            ],
            messageData: [],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('store')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dateOf() {
        let today = new Date()
        return today.toLocaleString()
    },
    addNewPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            dateOf: this.dateOf()
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPost(updateText) {
        this._state.profilePage.newPostText = updateText
        this._callSubscriber(this._state)
    },
    addNewMessage() {
        let newMessage = {
            id: 1,
            message: this._state.dialogsPage.newMessageText,
            time: this.dateOf()
        }
        this._state.dialogsPage.messageData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessage(updateText) {
        this._state.dialogsPage.newMessageText = updateText
        this._callSubscriber(this._state)
    },
    // dispatch(action) {

    //     if (action.type === 'ADD-NEW-POST') {
    //         let newPost = {
    //             id: 3,
    //             message: this._state.profilePage.newPostText,
    //             dateOf: this.dateOf()
    //         }
    //         this._state.profilePage.postData.push(newPost)
    //         this._state.profilePage.newPostText = ''
    //         this._callSubscriber(this._state)
    //     }
    //     if (action.type === 'UPDATE-NEW-POST') {
    //         console.log(this._state)
    //         this._state.profilePage.newPostText = action.updateTextPost
    //         this._callSubscriber(this._state)
    //     }
    //     if (action.type === 'ADD-NEW-MESSAGE') {
    //         let newMessage = {
    //             id: 1,
    //             message: this._state.dialogsPage.newMessageText,
    //             time: this.dateOf()
    //         }
    //         this._state.dialogsPage.messageData.push(newMessage)
    //         this._state.dialogsPage.newMessageText = ''
    //         this._callSubscriber(this._state)
    //     }
    //     if (action.type === 'UPDATE-NEW-MESSAGE') {
    //         this._state.dialogsPage.newMessageText = action.updateTextMessage
    //         this._callSubscriber(this._state)
    //     }
    // }
}


window.store = store
export default store