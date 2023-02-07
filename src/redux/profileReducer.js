const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

const profileReducer = (state, dateOf, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                dateOf: dateOf()
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.updateText
            return state
    }
    return state
}

export default profileReducer