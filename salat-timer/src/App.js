import React , {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './component/Navbar';
import Sugestions from './component/Sugestions';
import Search from './component/Search.jsx';
import Card from './component/Card'

function App() {

const [input, setInput] = useState("");
const [zipInput, setZipInput] = useState("")
const [data, setData] = useState(null)
const updateInput = (text) => {
  setInput(text);
}
const updateZipInput = (text) => {
  setZipInput(text);
}

const fetchData = async (city, zip) => {
// API Call 
  const endPoint = "http://www.islamicfinder.us/index.php/api/prayer_times"

  try {
    const response = await axios.get(`${endPoint}?country=${input? input: city}&zipcode=${zipInput? zipInput: zip}&time_format=0`)
    console.log(response.data);
    setData(response.data);
    console.log(data)
  }
  catch (err) {
    // enter error here 
  }
}

useEffect(() => {
  
    fetchData("DZ","16000");
  }
, [])

  return (
    <div className="app">
    <Navbar text="Salat Timer"/>
    <div className="container">
    <Search fetchData={fetchData} updateInput={updateInput} updateZipInput={updateZipInput}/>
    {data? <>
        <Card data={data}/>
      </>: <div>Enter your country and your zipcode</div>
    }    

    <Sugestions test='test' fetchData={fetchData}/>

    </div>

    </div>
  );
}

export default App;
