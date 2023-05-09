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
    <div className="imageGalley">
      <Randomize setScore={incrementScore} />
    </div>
  );
}

export default App;
