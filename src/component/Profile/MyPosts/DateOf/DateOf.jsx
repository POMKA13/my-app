import React from "react";
import s from './DateOf.module.css'

const DateOf = (props) => {

    return (
        <div className={s.dateOf}>
            {props.dateOf}
        </div>
    )
}

export default DateOf