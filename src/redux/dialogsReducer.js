const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 1,
                message: this._state.dialogsPage.newMessageText,
                time: this.dateOf()
            }
            this._state.dialogsPage.messageData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE:
            this._state.dialogsPage.newMessageText = action.updateText
            return state
    }
    return state
}

export default dialogsReducer