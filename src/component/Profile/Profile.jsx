import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrrofileInfo/ProfileInfo";
import s from '../Profile/Profile.module.css'
import store from "../../redux/store";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo/>
            <div className={s.postBox}>
                <MyPosts postData={props.postData}
                         addNewPost={props.addNewPost}
                         newPostText={props.newPostText}
                         updateNewPost={props.updateNewPost}
                         dateOf={props.dateOf}
                />
            </div>
        </section>
    )
}

export default Profile