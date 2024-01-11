import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Nav/Dialogs/Dialogs';
import {BrowserRouter, Routes,Route, } from 'react-router-dom';
import News from './Components/Nav/News/News';
import Music from './Components/Nav/Music/Music';
import Settings from './Components/Nav/Settings/Settings';


const App = (props)=> {



  return (
    
    <BrowserRouter>
  <div className='wrapper'>
    <Header/>
    <Nav />
    
    <div className='wrapper__content'>
    <Routes>
      <Route path="/profile" element = 
      {<Profile 
        state ={props.state.profilePage} 
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}/>}/>

      <Route path="/dialogs/*" element = {<Dialogs state ={props.state.dialogsPage}/>} />
      <Route path="/news" element = {<News/>}/>
        <Route path="/music" element = {<Music/>}/>
      <Route path="/settings" element = {<Settings/>}/> 
      </Routes>
      
    </div>
   </div>
</BrowserRouter>
  );
}



export default App;
