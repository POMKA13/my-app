import React from "react";
import s from './Post.module.css'
import Like from "../Like/Like";
import user from '../../../../image/IMG_20210414_190125~2.jpg'

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.content}>
                <img
                    src={user}/>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
            <Like count='10' dateOf={props.dateOf}/>
        </div>
    )
}

export default Post