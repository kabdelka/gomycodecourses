import React , {useState, useEffect} from 'react'

import './App.css';
import DataDisplay from './components/UserList'
import axios from 'axios'

function App() {

const [data, setData] = useState(null)
const fetchData = async () => {

  


  try {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users")
  console.log(result)
  setData(result.data)
  }
  catch(err) {
    setData(null)

  }
}
useEffect(() => {
   
      fetchData();
  
  }, [])


  return (
    <div className="App">
     {data? <> {data.map((user,index)=><DataDisplay key={index} name={user.name} email={user.email}/>)}

     </>:<div>Nothing here</div>}
    </div>
  );
}

export default App;
