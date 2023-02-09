import React from "react"
import s from './Music.module.css'

const Music = (props) => {
    return (
        <div className={s.video}>
            <iframe width="962" height="541" src="https://www.youtube.com/embed/o3mP3mJDL2k?list=RDQMs2eBLGcWhR8"
                    title="Shakira - Can't Remember to Forget You (Official Video) ft. Rihanna" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>Shakira - Can't Remember to Forget You (Official Video) ft. Rihanna</iframe>
        </div>
    )
}

export default Music