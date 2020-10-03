import React , {useState}from 'react';
import './App.css';
import TodoList from './Componenet/todoList';
import Navbar from "./Componenet/navbar"
import AddToList from './Componenet/addToList'

function App() {

const LIST = [{id:1,title:"Buy Milk",description:"You have to buy Milk everyday"},{id:2,title:"Feed dog",description:"You have to feed the dogs everyday"}]

const [list, setList] = useState(LIST)
const [input, setInput] = useState("")
const [inputD, setInputD] = useState('')
const handelSubmit = (e) => {
  e.preventDefault();
  setList([...list, {
    id:Math.random()*1000,
      title:input,
      description:inputD}
  ]);
  setInput('');
  setInputD('');
  console.log('tiybs')
}


  return (
    <div className="todo">
    <Navbar text="ToDo App"/>
    <div className="container">
    <AddToList setInput={setInput} setInputD={setInputD} handelSubmit={handelSubmit} inputD={inputD} input={input}/>
     <TodoList list={list}  setList={setList}/>
     </div>
    </div>
  );
}

export default App;
