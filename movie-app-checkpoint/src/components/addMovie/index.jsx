import React , {useState}from 'react'
import addImage from "./add.jpg";
import { Modal, Rate, Input } from 'antd';
import './addmovie.css'


const AddMovie = ({movies, setMovies}) => {
const initialInputs = {
	name:'',
	image:'',
	rate:''
}
const [visible, setVisible] = useState(false);
const [inputs, setInputs] = useState(initialInputs)

const showModal = () => {
	setVisible(true)
}

const handelOk = (e) => { 
	console.log('tets')
		setVisible(false)
		setMovies([...movies,inputs])
		setInputs(initialInputs)
	
}

const handelCancel = (e) => { 
	
		setVisible(false)
	
}


	return (
		<>
		<div className="add" onClick={showModal}></div>
			

		
		<Modal

				title='Add a movie'
				visible={visible}
				onOk={handelOk}
				onCancel={handelCancel}
			>


			<Input value={inputs.name} placeholder='Enter the Movie Title (Required)' type="text" required style={{width:'80%'}} addonBefore='Movie Name:' suffix='*' onChange={(e)=>{setInputs({...inputs,name:e.target.value})}}/>
			<br/>
			<Input value={inputs.image} type="text" placeholder='Enter an url ending with .jpg (Not required)' addonBefore='Movie Image:' onChange={(e)=>{setInputs({...inputs, image:e.target.value})}}/>
			<br/>
			<Rate value={inputs.rate} character='🌟' onChange={(value)=>{setInputs({...inputs, rate:value})}}/>

			</Modal>
			</>
			
		)
}


export default  AddMovie;


