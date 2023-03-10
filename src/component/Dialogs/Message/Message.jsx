import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {

    return (
            <div className={s.message}>
                {props.message}
                <div className={s.time}>
                    {props.time}
                </div>
            </div>

    )
}

export default Message