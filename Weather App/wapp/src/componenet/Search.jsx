import React from 'react';

const Search = ({updateInput, fetchData}) => {
	return (
		<div className="weather-search">
			<input onChange={(event)=>{updateInput(event.target.value)}} type="text" placeholder="Enter the name of your city"/><button onClick={()=>fetchData()} className="search-btn">Search</button>
		</div>
		)
}


export default Search ;
