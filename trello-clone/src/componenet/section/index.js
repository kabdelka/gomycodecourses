import React from 'react';
import './section.css'
import Card from '../card';

const Section = ({data,title}) => {
	return (
		<div className="section">
		<div className="section-title">{title}</div>
		<div className="section-cards">
		{data.map((elem,index)=><Card
			title={elem.title}
			description={elem.description}
			ddl={elem.ddl}
			key={index}
			/>)}
		</div>
		</div>
		)
}


export default Section;