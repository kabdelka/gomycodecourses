import React from 'react';

const Sugestions = ({fetchData}) => {

	return (
		<div className="sugestions">
		<ul>
			<li onClick={()=>fetchData("dz","16000")}>Alger</li>
			<li onClick={()=>fetchData("dz","15000")}>Tizi Ouzou</li>
			<li onClick={()=>fetchData("dz", "09000")}>Blida</li>
			<li onClick={()=>fetchData("fr","75000")}>Paris</li>
			<li onClick={()=>fetchData("ca", "H2H")}>Montreal</li>
		</ul>
		</div>
		)
}


export default Sugestions;