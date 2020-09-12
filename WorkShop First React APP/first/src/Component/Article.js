import React from 'react';
const Article = ({title,text}) => {
	return (<div className="article">
		<div className="article-title">{title}</div>
		<div className="article-text">{text}</div>
		</div>)
};

export default Article;