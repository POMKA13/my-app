import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, this.dateOf, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, this.dateOf, action)

        this._callSubscriber(this._state)
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

export const addNewMessageActionCreator = () => {
    return (
        {
            type: ADD_NEW_MESSAGE
        }
    )
}

export const updateNewMessageActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE,
            updateText: text
        }
    )
}

export default store