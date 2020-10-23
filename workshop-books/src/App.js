import React from 'react';
import bookImage from './assets/booksImage.jpg'
import Banner from './components/banner'
import DisplayBooks from './components/displaybooks'
import Filters from './components/filters'
import './App.css'

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <div className="container">
        <Filters></Filters>
        <DisplayBooks></DisplayBooks>
      </div>
    </div>
  );
}

export default App;
