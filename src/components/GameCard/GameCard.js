import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div 
  className="card"
  value={props.id}
  onClick={() => props.handlePicked(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GameCard;
