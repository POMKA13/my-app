import React from "react";
import s from './Header.module.css'
import mail from '../../image/icon/mail_FILL0_wght400_GRAD0_opsz48.png'
import login from '../../image/icon/login_FILL0_wght400_GRAD0_opsz48.png'
import setting from '../../image/icon/settings_FILL0_wght400_GRAD0_opsz48.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>ReactJS</div>
            <div className={s.search}>
                <form className={s.form}>
                    <input type='text' placeholder='Search'/>
                    <div className={s.searchContainer}>
                        <span className={s.circle}></span>
                        <span className={s.hyphen}></span>
                    </div>
                </form>
            </div>
            <div className={s.box}>
                <ul>
                    <li className={s.boxLick}>
                        <a href='#'>
                            <img src={mail}/>
                        </a>
                    </li>
                    <li className={s.boxLick}>
                        <a href='#'>
                            <img src={login}/>
                        </a>
                    </li>
                    <li className={s.boxLick}>
                        <a href='#'>
                            <img src={setting}/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header