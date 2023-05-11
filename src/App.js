import React, { useState } from 'react';
import Randomize from './components/Randomize';
import CardData from './components/CardData';
function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cards, setCards] = useState(CardData());
  const incrementScore = () => {
    setCurrScore(currScore + 1);
  };

  const onClick = (event) => {
    event.stopPropagation();
    let cardArr = cards;
    const clickedObj = cards.find((obj) => {
      return obj.id == event.target.id;
    });
    const index = cardArr.findIndex((obj) => {
      return obj.id == event.target.id;
    });
    const clicked = clickedObj.clicked;
    if (!clicked) {
      incrementScore();
      cardArr[index].clicked = true;
    }
    if (clicked) {
      if (currScore > bestScore) {
        setBestScore(currScore);
      }
      setCurrScore(0);
      cardArr.forEach((element) => {
        element.clicked = false;
      });
    }
    console.log(clicked, clickedObj, index);
    setCards(cardArr);
  };

  return (
    <div className="bg" style={{ backgroundImage: 'url(background.jpeg)' }}>
      {' '}
      <div className="header">
        <div className="title">
          <h1>Avatar Memory Game</h1>
        </div>

        <div className="score">
          <h4>Score: {currScore}</h4>
          <h4>High Score: {bestScore}</h4>
        </div>
        <div className="instructions">
          <h2>
            Get points by clicking on an image but don't click on any more than
            once!
          </h2>
        </div>
      </div>
      <div className="imageGallery">
        <Randomize
          setScore={incrementScore}
          onClick={onClick}
          cards={cards}
          setCards={setCards}
        />
      </div>
    </div>
  );
}

export default App;
