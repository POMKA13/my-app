import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addNewPost} from "./redux/state";

export let render = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addNewPost={addNewPost}/>
        </React.StrictMode>
    );

    reportWebVitals();
}
