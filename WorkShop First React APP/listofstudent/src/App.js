import React, {useState, setState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar.js'
import Student from './Component/DisplayStudent.js'
import {students,setStudents} from './students.js'
import List from './Component/List.js'
import Data from './Component/Input'
import Component from 'react';




function App() {

  return (
    <div>
      <Navbar text="List Of Student"/>
    
      <div className="container">
      
        
          <List students={students} className="list-container"/>
          <Data className="data-input"/>

        
      </div>
    </div>
  );
}

export default App;
