import './index.css';
import {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addNewPost={store.addNewPost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                    updatePostText={store.updatePostText.bind(store)}
                    updateMessageText={store.updateMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)
