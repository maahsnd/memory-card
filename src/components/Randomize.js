import React from 'react';
import '../style.css';

const Randomize = (props) => {
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const data = shuffle(props.cards).map((card) => (
    <div className="card" onClick={props.onClick} key={card.id} id={card.id}>
      <img
        src={require('../images/' + card.name + '.jpeg')}
        alt={card.name}
        id={card.id}
      />
      <h2>{card.name}</h2>
    </div>
  ));

  return data;
};

export default Randomize;
