import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Componenet/Navbar.js'
import Header from './Componenet/Header.jsx'
import Cards from './Componenet/Cards.jsx'
import axios from 'axios';
import { Empty } from 'antd';
import { Spin } from 'antd';
function App() {

  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false);
  const fetchData =  async (value) => {
      setLoading(true);
    const endPoint = "https://api.edamam.com/search";
    const appId = "5cb589b2";
    const appKey = "1a4fc1dbce5174236451fef8b0139eff";

    try {
      const response = await axios.get(`${endPoint}?q=${value}&app_id=${appId}&app_key=${appKey}&from=0&to=24`)
      console.log(response);
      setData(response.data)
      setLoading(false);

      if (response.data.count===0) {
        setData(null)
        setLoading(false)
      }
      }

      catch(err){
        setData(null)
        setLoading(false)
        alert(err);
      }

  }



  return (
    <div className='page'>
      <Navbar text='Recipe App'/>
      <div className="container">
          <Header fetchData={fetchData}/>
        <div className="cards-container">
          {loading?<div><Spin/></div>:
            <>
            {data? <>
            {data.hits.map((recipe,index)=> <Cards key={index} name={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredientLines}/>)}
            </>: <Empty/>
            }
            </>
          }
          
        

        </div>
      </div>
    </div>
  );
}

export default App;
