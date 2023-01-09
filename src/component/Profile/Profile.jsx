import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrrofileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <section>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </section>
    )
}

export default Profile