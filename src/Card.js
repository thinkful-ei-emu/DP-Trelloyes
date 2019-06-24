import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div class="Card">
        <button type="button">delete</button>
        <h3> {props.no}. {props.title}</h3>
        <p>{props.cardinfo}</p>
    </div>
    );
  }

  export default Card;

