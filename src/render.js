import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addNewPost, updateMessageText, updatePostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addNewPost={addNewPost}
                     addMessage={addMessage}
                     updatePostText={updatePostText}
                     updateMessageText={updateMessageText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
