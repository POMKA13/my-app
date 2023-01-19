import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PrrofileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <section>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addNewPost={props.addNewPost}/>
        </section>
    )
}

export default Profile