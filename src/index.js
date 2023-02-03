import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerender = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
    reportWebVitals();
}
rerender(store.getState())

store.subscribe(rerender)