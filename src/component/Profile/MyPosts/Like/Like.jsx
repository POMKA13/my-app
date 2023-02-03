import React from "react";
import s from './Like.module.css'
import DateOf from "../DateOf/DateOf";

const Like = (props) => {

    return (
        <div className={s.likeBox}>
            <div className={s.like}>
                <a href='#'>
                    <img
                        src='https://img.freepik.com/free-vector/sticker-template-with-thump-up-icon-isolated_1308-60050.jpg?w=2000'/>
                </a>
                <div className={s.count}>{props.count}</div>
            </div>
            <div>
                <DateOf dateOf={props.dateOf}/>
            </div>
        </div>
    )
}

export default Like