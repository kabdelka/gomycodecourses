import React from 'react'
import './filters.css'
import {Input} from 'antd'
import {useDispatch} from 'react-redux'


const Filters =() => {

const dispatch = useDispatch();

	return (

		<div className="filters">
		<span className='txt-filters'>Filters</span>
		<Input className='inputs' placeHolder="Search by Book" onChange={(event)=>{
			dispatch({type:'UPDATE_TITLE', payload:event.target.value})
		}}></Input>
		<Input className="inputs"  placeHolder="Search by Author" onChange={(event)=>{
			dispatch({type:"UPDATE_AUTHOR", payload:event.target.value})
		}}></Input>
		</div>
			)
} 



export default Filters;