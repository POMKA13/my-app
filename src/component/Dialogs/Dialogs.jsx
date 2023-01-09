import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem userName={dialog.userName} id={dialog.id}/>)

    let messagesElement = props.messageData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogMessage}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    )
}
export default Dialogs