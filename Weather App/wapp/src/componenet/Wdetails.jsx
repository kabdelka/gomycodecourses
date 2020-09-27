import React from 'react'

const Wdetails = ({data}) => {
	return (<div className="weather-details">

		<div className="temperature">Temperature:
			<div className="temperature-details">{`${Math.floor(data.main.temp -273.15)}°`}</div>
		</div>
		<div className="weather">Weather:
			<div className="weather-d">{data.weather[0].description}</div>
		</div>
		<div className="wind">Wind:
			<div className="wind-details">{`${data.wind.speed} M/s`}</div>
		</div>
		</div>)
}


export default Wdetails;