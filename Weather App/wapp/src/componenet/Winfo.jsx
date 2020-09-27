import React from 'react';
import image from '../assets/cloudy.png'

const Winfo = ({data}) => {
	return (<div className="weather-info">
		<img src={image} alt="Cloudy" height='200px' width="200px"/>
		<div className="city-name">{data.name}</div>
	</div>)
}


export default Winfo;