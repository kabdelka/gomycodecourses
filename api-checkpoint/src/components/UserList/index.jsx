import React , {useState, useEffect} from 'react'
import axios from 'axios'


	
const DataDisplay = ({key,name,email}) => {
	return (

		<div className="user" >
		<h1>{name}</h1>
		<h1>{email}</h1>
		</div>

		)

}


export default DataDisplay