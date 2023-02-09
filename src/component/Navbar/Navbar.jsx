import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <ul>
                <li className={s.link}>
                    <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar