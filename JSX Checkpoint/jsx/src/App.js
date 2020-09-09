import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import airplane from './airplane.png'

function App() {
  return (
    <div className="style">
    <h1 className="title red">Your name here</h1>
    <br/>
    <img src={process.env.PUBLIC_URL + 'international.png'} alt="Logo"/>
    <br/>
    <img src={airplane} alt="airplane"/>

    </div>);
    
}

export default App;
