import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/store";

const Dialogs = (props) => {
    debugger
    let dialogsElement = props.dialogsData.map(dialog => <DialogItem userName={dialog.userName} id={dialog.id}/>)

    let messagesElement = props.messageData.map(message => <Message message={message.message} time={message.time}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addNewMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <div className={s.dialogMessage}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div className={s.box}>
                    {messagesElement}
                </div>
                <div className={s.newMessage}>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
                        <button onClick={addMessage}> Add message</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs