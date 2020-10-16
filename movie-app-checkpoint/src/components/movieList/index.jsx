import React from 'react';
import MovieCard from '../movieCard';
import './movielist.css'


const MovieList = ({movies}) => {

	return (
		<div className="movie-list">
		{movies.map((movie,index)=>{
			return(
				<MovieCard key={index} name={movie.name} image={movie.image} rate={movie.rate}/>
				)
		})}
		</div>
		)
}


export default MovieList