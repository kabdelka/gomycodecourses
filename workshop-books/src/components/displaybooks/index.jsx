import React from 'react'
import './displaybooks.css'
import Addbook from '../button/'
import BookCard from '../bookcard'
import {useSelector} from 'react-redux'



const DisplayBooks = ( ) => {
	const {books} = useSelector((state)=>state.book)
	const {title, author} = useSelector((state)=>state.filter)
	return (
		<div className="display-books">
		<Addbook className='btn'></Addbook>
		<div className="books-container">

		{!books || books.length===0? (
			<div>No data to display</div>
			): <>{books.filter((elem)=>elem.title.toLowerCase().indexOf(title.toLowerCase())!==-1).filter((elem)=>elem.author.toLowerCase().indexOf(author.toLowerCase())!==-1).map((book,index)=>{return (<BookCard 
				title={book.title}
				author={book.author}
				rating={book.rating}
				voters={book.voters}
				description={book.description}


				></BookCard>)})}</>}
		

		</div>
		</div>
		)
}


export default DisplayBooks;