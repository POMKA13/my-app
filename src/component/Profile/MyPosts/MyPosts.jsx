import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addNewPost} from "../../../redux/state";

const MyPosts = (props) => {

    let post = props.postData.map(message => <Post message={message.message} addPost={props.addPost}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addNewPost(text)
    }

    return (
        <section className={s.content}>
            <div>
                <h2 className={s.title}>My post</h2>
                <div className={s.inputText}>
                    <div>
                        <textarea ref={newPostElement}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {post}
                </div>
            </div>
        </section>
    )
}

export default MyPosts