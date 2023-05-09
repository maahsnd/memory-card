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

  /* onclick
  if not clicked before (cardClicked = false):
    increment current score,
    set card clicked = true
  if clicked before (cardClicked = true):
    if currentScore > bestScore:
      set bestScore = currentScore
    set current score = 0,
    reset all cardClicked = false
    
     */
  return (
    <div className="main">
      <h2>Score: {currScore}</h2>
      <h2>High Score: {bestScore}</h2>
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
