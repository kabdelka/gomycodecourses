import React, { useState } from 'react';
import {students,setStudents} from '../students.js'





const List = ({students}) => {
	return (
			<ul className="list-container">
				{students.student.map((student,index) =>{
					return (<li key={index}>{student.name}<button className="delete-btn">X</button></li>)
				})}
			</ul>
		)
}

export default List ;