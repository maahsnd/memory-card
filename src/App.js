import React, { useState } from 'react';
import Randomize from './Randomize';
function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <Randomize />
    </div>
  );
}

export default App;
