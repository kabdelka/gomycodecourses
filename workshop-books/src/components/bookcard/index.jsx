import React from 'react'
import bookImage from './book1.jpg'
import './bookcard.css'
import { Rate } from 'antd'
import 'antd/dist/antd.css'

const BookCard = ({title,author,rating,voters,description}) => {
	return (
		<div className="card">
			<div className="books-image">
				<img src={bookImage} width='140px' style={{position:'relative' , top:-20 , left:5, marginRight:20}} alt="image"/>
			</div>
			<div className="books-details">
			<div className="books-info">
				<span className='books-title'>{title}</span>
				<span className="books-author">{author}</span>
			</div>
			<div className="books-rate">
				<span className="books-stars"><Rate disabled style={{fontSize:15}} value={rating}/></span>
				<span className="books-votes">{`${voters} votes`}</span>
			</div>
			<div className="books-description">
				<p>{description}</p>
			</div>
			</div>
		</div>
		)
}


export default BookCard;