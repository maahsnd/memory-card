import React, { useState } from 'react';
import Randomize from './components/Randomize';
function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setCurrScore(currScore + 1);
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
        <Randomize setScore={incrementScore} />
      </div>
    </div>
  );
}

export default App;
