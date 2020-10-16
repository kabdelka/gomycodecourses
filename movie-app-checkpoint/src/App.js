
// React 
import React, {useState} from 'react';

// Css
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';

// components
import MovieCard from './components/movieCard'
import MovieList from './components/movieList'
import Navbar from './components/navbar'
import AddMovie from './components/addMovie'



// The App 

function App() {


// State Movie List 
const [movies, setMovies] = useState([{name:"Inception",
image:'https://jatufilmrev.files.wordpress.com/2010/05/inception-poster.jpg',
rate:"🌟🌟🌟🌟🌟"},
{name:'Interstellar',
image:'https://i.pinimg.com/736x/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8--interstellar-film-posters.jpg',
rate:'🌟🌟🌟🌟'},
{name:'Arrival',
image:'https://www.newdvdreleasedates.com/images/posters/large/arrival-2016-04.jpg',
rate:'🌟🌟🌟🌟🌟'}])




  return (
    <div className="movie-app">
       <AddMovie movies={movies} setMovies={setMovies}/>
      <div className="container">
       <Navbar/>
      <MovieList movies={movies}/>
      </div>  
    </div>
  );
}

export default App;
