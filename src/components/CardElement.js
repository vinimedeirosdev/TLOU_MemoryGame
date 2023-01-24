import React from "react";

function CardElement(props) {
  return (
    <div
      onClick={() => {
        props.handleFlip(props.card);
      }}
      id={props.card.id}
      className={`card ${props.card.flipped ? "flip" : ""}`}
    >
      <div className="card_front">
        <img
          className="icon"
          src={`assets/images/${props.card.icon}.jpg`}
          alt={props.card.icon}
        ></img>
      </div>
      <div className="card_back">
        <img
          className="logo"
          src={`assets/images/logo.jpg`}
          alt={props.card.logo}
        ></img>
      </div>
    </div>
  );
}

export default CardElement;
