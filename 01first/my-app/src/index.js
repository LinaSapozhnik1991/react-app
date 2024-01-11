





import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store  from './redux/state';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
debugger;
 let rerenderEntairTree =(state)=>{
root.render(
<App state = {state} 
    addPost={store.addPost.bind(store)} 
    updateNewPostText={store.updateNewPostText.bind(store)}/>
);}


reportWebVitals();
rerenderEntairTree (store.getState());
store.subscribe(rerenderEntairTree);


