import React from 'react';
import Article from './Article'


const blog = ({articles}) => {
	return (<div className="blog">
		{articles.map((elem,index)=> {
			return (<Article title={elem.title} text={elem.text} key={index}/>)
		})}
	</div>)
};

export default blog;