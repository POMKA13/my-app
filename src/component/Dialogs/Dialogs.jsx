import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem userName={dialog.userName} id={dialog.id}/>)

    let messagesElement = props.messageData.map(message => <Message message={message.message} time={message.time}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let newMessage = newMessageElement.current.value
        alert(newMessage)
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
                        <textarea ref={newMessageElement}></textarea>
                        <button onClick={addMessage}> Add message</button>
                </div>
            </div>
        </div>

    )
}
export default Dialogs