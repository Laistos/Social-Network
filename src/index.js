import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let dialogsData = [
  { id: 1, name: 'Asta' },
  { id: 2, name: 'Yuno' },
  { id: 3, name: 'Robin' },
  { id: 4, name: 'JoGoat' },
  { id: 5, name: 'MiwaGoat' },
]

let messagesData = [
  { message: 'Я СТАНУ КОРОЛЕМ МАГОВ' },
  { message: 'Не слушай Асту. Королем магов стану я!' },
  { message: 'If i could stop one heart from breaking' },
  { message: 'Между небом и землей лишь я один достойный' },
  { message: 'Между небом и землей лишь я одна достойна' },
]

let postInfo = [
  { message: 'Hey! Sup guys!', likes: 15 },
  { message: 'you want to play lets play! OMG Im in love with this chamber voiceline', likes: 50 },
]



root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postInfo={postInfo} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
