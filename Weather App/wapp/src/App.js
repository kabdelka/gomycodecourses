import React, {useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componenet/Navbar.js'
import Search from './componenet/Search.jsx'
import Winfo from './componenet/Winfo.jsx'
import Wdetails from './componenet/Wdetails.jsx'
import axios from 'axios';

function App() {
    // get the value of the user 
  const [input,setInput] = useState('');
  const [data,setData] = useState(null);
  const updateInput = (text) => {
    setInput(text);
  }

  const fetchData =  async (city) => {
    // API CALL 
    const endPoint = "https://api.openweathermap.org/data/2.5/weather"
    const apiKey = "ee5764b807085b6dedd49f2e1abbcf0e"
    try {
      const response =  await axios.get(`${endPoint}?q=${input? input: city}&appid=${apiKey}`)

    setData(response.data);
      

  } catch (err) {

    // enter error here 
  }

  }


  useEffect(() => {
   
      fetchData("Paris");
  
  }, [])
  return (
    <div>
  <Navbar text='Weather App'/>
  <div className="page-container">
    <div className="weather-container">
      <Search updateInput={updateInput} fetchData={fetchData}/>


      {data? 
        <>
          <Winfo data={data}/>
         <Wdetails data={data}/>
        </>:
      <div>Please enter a city to display weather</div>}
      
    </div>
  </div>
  </div>);
}

export default App;
