import {render} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello world!!!'},
            {id: 2, message: 'How are you?'}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, userName: 'Roman'},
            {id: 2, userName: 'Aleksandra'},
            {id: 3, userName: 'Ekaterina'},
            {id: 4, userName: 'Artyom'}
        ],
        messageData: [
            {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', time: '16:39'},
            {id: 2, message: 'Dolore dolorum, eaque expedita illum impedit magni modi odio.', time: '23:45'},
            {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', time: '10:31'},
        ]
    }

}

export let addNewPost = (postMessage) => {

    let newPost = {
        id: 3,
        message: postMessage
    }
    state.profilePage.postData.push(newPost)
    render(state)
}
export default state