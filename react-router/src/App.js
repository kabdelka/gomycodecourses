import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import LogicRouter from './components/logicRouter'
import Message from './components/message'
import Contact from './components/contact'
import Article from './components/article'
import Forum from './components/forum'
import Home from './components/home'


const routeTab = [
      {comp:Home,path:'/Home'}
      , {comp:Message, path:'/Message'},
       {comp:Contact, path:'/Contact'},
        {comp:Article, path:'/Article'},
         {comp:Forum, path:'/Forum'}
   ]



function App() {
  return (
    <div className="react-router">
    <Navbar/>
    <LogicRouter routeTab={routeTab}/>

    </div>
  );
}

export default App;
