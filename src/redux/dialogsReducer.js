const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const dialogsReducer = (state, dateOf, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessageText,
                time: dateOf()
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.updateText
            return state
    }
    return state
}

export default dialogsReducer