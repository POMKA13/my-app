import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrrofileInfo/ProfileInfo";
import s from '../Profile/Profile.module.css'


const Profile = (props) => {
    return (
        <section>
            <ProfileInfo/>
            <div>
                <MyPosts postData={props.postData}
                         dispatch={props.dispatch}
                         newPostText={props.newPostText}
                         dateOf={props.dateOf}
                />
            </div>
        </section>
    )
}

export default Profile