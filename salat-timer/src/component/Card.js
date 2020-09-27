import React from 'react' 
import image from '../assets/salat.svg'

const Card = ({data}) => {
	return (
		<div className="card">
		<div className="zone">Salat time in {data.settings.location.state}</div>
		<img src={image} alt='salat' height="300" width="300"/>
		<div className="card-info">
		<div className="fajr">Fajr :{data.results.Fajr}</div>
		<div className="duha">Duha :{data.results.Duha}</div>
		<div className="duhr">Duhr :{data.results.Dhuhr}</div>
		<div className="asr">Asr: {data.results.Asr}</div>
		<div className="maghreb">Maghreb :{data.results.Maghrib}</div>
		<div className="isha">Isha :{data.results.Isha}</div>
		</div>
		</div>
		)
}



export default Card;