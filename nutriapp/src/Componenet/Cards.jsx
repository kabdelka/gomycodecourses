import React from 'react';
import { Avatar } from 'antd';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Cards = ({name,calories,image,ingredients}) => {
	return (
		
			<div className="card">
				<div className="avatar"> 
					<Avatar className="icon" size={180} src={image}/>
				</div>
				<div className='recipe-info'>
					<div className="recipe-title">{name}</div>
					<div className="recipe-kca">{`${Math.floor(calories)}Ca`}</div>
				</div>
				<div className="recipe-details">
					<Collapse>
					<Panel header="Ingredients">{ingredients.map((ing,idx)=><div key={idx}>{ing}</div>)}</Panel>
					</Collapse>
				</div>
		</div>
		
		)
}

export default Cards ;