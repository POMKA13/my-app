import React from "react";
import s from '../Header/Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <a href='#'><img className={s.logo} alt='logo'
                             src='https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png'/></a>
        </header>
    )
}

export default Header