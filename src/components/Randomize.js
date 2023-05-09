import React, { useState } from 'react';
import CardData from './CardData';
import '../style.css';

const Randomize = (props) => {
  const data = CardData().map((card) => (
    <div className="card" onClick={props.onClick} key={card.id}>
      <img
        src={require('../images/' + card.name + '.jpeg')}
        alt={card.name}
        id={card.id}
      />
      <h3>{card.name}</h3>
    </div>
  ));
  return data;
};

export default Randomize;
