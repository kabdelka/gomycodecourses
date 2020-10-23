import React , {useState} from 'react'
import {Button , Modal , Input , Rate} from 'antd'
import {useSelector, useDispatch} from 'react-redux'

const Addbook = () => {
	const dispatch = useDispatch()
	const {visible , newBook } = useSelector((state)=>state.book)








	return (
		<div className="btn">
		<Button className="btn" size="large" type='default' block onClick={()=>dispatch({type:'UPDATE_VISIBLE',payload:true})}>Add a Book</Button>

		<Modal

				title='Add a Book'
				visible={visible}
				onOk={()=>{dispatch({type:'UPDATE_VISIBLE',payload:false})
					dispatch({type:'ADD_NEW_BOOK',payload:newBook})}}
				onCancel={()=>dispatch({type:'UPDATE_VISIBLE',payload:false})}
			>


			<Input className='inputs' placeHolder="Enter the title of the book" value={newBook.title} onChange={(event)=>dispatch({type:'UPDATE_NEW_BOOK',payload:{...newBook,title:event.target.value}})}/>
			<br/>
			<Input className='inputs' placeHolder="Enter the name of the Author" value={newBook.author} onChange={(event)=>dispatch({type:'UPDATE_NEW_BOOK',payload:{...newBook,author:event.target.value}})} />
			<br/>
			<Input className='inputs' placeHolder="Enter the description of the book" value={newBook.description} onChange={(event)=>dispatch({type:'UPDATE_NEW_BOOK',payload:{...newBook,description:event.target.value}})}/>
			<br/>
			<Rate onChange={(value)=>dispatch({type:'UPDATE_NEW_BOOK',payload:{...newBook,rating:value}})} />

			</Modal>
		</div>
		
		)
}


export default Addbook;