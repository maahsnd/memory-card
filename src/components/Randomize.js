import React, { useState } from 'react';
import CardData from './CardData';
import '../style.css';

const Randomize = (props) => {
  return CardData().map((card) => (
    <div key={card.id} className="card">
      <img
        src={require('../images/' + card.imgSrc + '.jpeg')}
        alt={card.name}
      />
      <h3>{card.name}</h3>
    </div>
  ));
};

export default Randomize;
