import React from 'react';
import './moviecard.css';
import movieImage from './movie-image.jpg'

const MovieCard = ({image,name,rate}) => {

	return (
		<div className="movie-card">
		<div className="movie-img">
		<img className="img" src={image? image : movieImage} alt="Movie-Image"/>
		</div>
		<div className="movie-name">{name}</div>
		<div className="movie-rate">{rate}</div>
		</div>
		)
}


export default MovieCard;