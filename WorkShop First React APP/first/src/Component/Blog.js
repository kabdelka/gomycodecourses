import React from 'react';
import Article from './Article'

// the blog component receives data and display it with the article component
const blog = ({articles}) => {
	return (<div className="blog">
		{articles.map((elem,index)=> {
			return (<Article title={elem.title} text={elem.text} key={index}/>)
		})}
	</div>)
};

export default blog;