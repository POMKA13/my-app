const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

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

    dispatch(action) {
        if (action.type === ADD_NEW_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                dateOf: this.dateOf()
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.updateText
            this._callSubscriber(this._state)
        }
        if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                id: 1,
                message: this._state.dialogsPage.newMessageText,
                time: this.dateOf()
            }
            this._state.dialogsPage.messageData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.updateText
            this._callSubscriber(this._state)
        }
    }
}

export const addNewPostActionCreator = () => {
    return (
        {
            type: ADD_NEW_POST
        }
    )
}
export const updateNewPostActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST,
            updateText: text
        }
    )
}

window.store = store
export default store