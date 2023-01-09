import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <navbar className={s.navbar}>
            <div className={s.link}>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </navbar>
    )
}

export default Navbar