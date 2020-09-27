import React from 'react';

const Search = ({updateInput, fetchData, updateZipInput}) => {
	return (
		<div className="search">
			<input onChange={(event)=>{updateInput(event.target.value)}} type="text" placeholder="dz, fr, us, ca"/>
			<input onChange={(event) => {updateZipInput(event.target.value)}} type="text" placeholder="enter your zipcode here"/>
			<button onClick={()=>fetchData()} className="search-btn">Search</button>
		</div>
		)
}


export default Search ;
