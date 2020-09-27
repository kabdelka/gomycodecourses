import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (<div>
       <h1>Liste de client</h1>
       <ul>
            <li>Client  1<button>X</button></li>
            <li>Client  2<button>X</button></li>
            <li>Client  3<button>X</button></li>   
       </ul>
       <form>
       <input type="text" placeholder="Add a client"/>
       <button>Confirmer</button>
       </form>
    </div>);
   
  }
}

export default App;
