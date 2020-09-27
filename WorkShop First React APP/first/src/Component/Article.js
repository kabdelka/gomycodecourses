import React from 'react';

// construction of one Article
const Article = ({title,text}) => {
	return (<div className="article">
		<div className="article-title">{title}</div>
		<div className="article-text">{text}</div>
		</div>)
};

export default Article;