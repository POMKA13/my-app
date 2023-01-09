import React from "react";
import s from './Post.module.css'
import Like from "../Like/Like";

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.content}>
                <img
                    src='https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'/>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
            <Like count='10'/>
        </div>
    )
}

export default Post