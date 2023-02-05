import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../../redux/store";

const MyPosts = (props) => {

    let post = props.postData.map(message => <Post message={message.message} addPost={message.addPost} dateOf={message.dateOf}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addNewPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <section className={s.content}>
            <div>
                <h2 className={s.title}>My post</h2>
                <div className={s.posts}>
                    {post}
                </div>
                <div className={s.inputText}>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MyPosts