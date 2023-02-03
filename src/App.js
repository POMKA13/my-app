import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Dialogs from "./component/Dialogs/Dialogs";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import store from "./redux/store";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile postData={props.state.profilePage.postData}
                                                 addNewPost={props.addNewPost}
                                                 newPostText={props.state.profilePage.newPostText}
                                                 updateNewPost={props.updateNewPost}
                                                 dateOf={props.state.profilePage.postData.dateOf}
                               />}/>
                        <Route path='/dialogs'
                               element={<Dialogs
                                   dialogsData={props.state.dialogsPage.dialogsData}
                                   messageData={props.state.dialogsPage.messageData}
                                   timeData={props.state.dialogsPage.messageData}
                                   addNewMessage={props.addNewMessage}
                                   updateNewMessage={props.updateNewMessage}
                                   time={props.state.dialogsPage.messageData.time}
                                   newMessageText={props.state.dialogsPage.newMessageText}
                                   />} />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
