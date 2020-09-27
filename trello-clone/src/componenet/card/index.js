import React from 'react';
import './card.css';

const Card = (props) => {
    return (
      <div className="card-container">
        <div
          className="card-tag"
          style={{ backgroundColor: "red" }}
        ></div>
        <div className="card-title">{props.title}</div>
        <hr></hr>
        <div className="card-description">{props.description}</div>
        <div className="card-footer"></div>
          <div className="card-ddl">{props.ddl}</div>
          
      	</div>)};


export default Card;