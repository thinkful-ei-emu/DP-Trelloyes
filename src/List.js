import React from 'react';
import Card from './Card';
import './List.css';




function List(props) {
  let godCards = [];
  props.cards.forEach(card =>{
    godCards.push(<Card no = {godCards.length +1} content = {card.content} title = {card.title}/>);
  } );
  
    return (
    <section className="List">
    <header className="List-header">
      <h2>{props.no}. {props.header} </h2>
    </header>
    <div className="List-cards">
        {godCards}
      <button type="button" className="List-add-button">
        + Add Random Card
      </button>
    </div>
  </section>
  );
}

export default List;