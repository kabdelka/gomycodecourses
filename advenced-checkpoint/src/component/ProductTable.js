import React from 'react';


const ProductTable = ({products}) => {
	return (

		<div className="products">
		{console.log(products)}
		<div className="products-name">Name
		<ul>
		{products.map((product,index)=>{return (
			<li key={index}>{product.name}</li>
			)})}
		</ul>
		</div>
		<div className="products-category">Category
		<ul>
		{products.map((product,index)=>{return (
			<li key={index}>{product.category}</li>
			)})}
		</ul>
		</div>
		<div className="products-price">Price
		<ul>
		{products.map((product,index)=>{return (
			<li key={index}>{product.price}</li>
			)})}
		</ul>
		</div>
		</div>
		)
}


export default ProductTable;