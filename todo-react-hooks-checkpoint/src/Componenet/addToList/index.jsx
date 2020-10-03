import React from 'react'
import "./addtolist.css";

const AddToList = ({setInput,handelSubmit, setInputD ,input,inputD}) => {

	return (
		<div className="addtolist">
		<input type="text" value={input} placeholder="Add a title " onChange={e => setInput(e.target.value)}/>
		<input type="text" value={inputD} placeholder="Add a description" onChange={e => setInputD(e.target.value)}/>
		<button onClick={handelSubmit}>Add</button>
		</div>
		)
}


export default AddToList;