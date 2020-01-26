import React, { useState } from 'react';
import './App.css';
import Dashboard from './comp/Dashboard';
import Display from './comp/Display';

export const addBall = ({ball, ...etc}) => {
  if (ball >= 3) {
    return {
      ...etc,
      ball: 0,
      strike: 0,
    };
  } else {
    return {
      ...etc,
      ball: ball + 1
    };
  }
};

export const addStrike = ({strike, ...etc}) => {
  if (strike >= 2) {
    return {
      ...etc,
      ball: 0,
      strike: 0,
    };
  } else {
    return {
      ...etc,
      strike: strike + 1
    };
  }
}

export const addHit = (state) => {
  return {
    ...state,
    ball: 0,
    strike: 0,
  }
}

export const addFoul = ({strike, ...etc}) => {
  return {
    ...etc,
    strike: Math.min(strike + 1, 2),
  }
}

function App() {
  let [score, setScore] = useState({
    ball: 0,
    strike: 0,
  });

  return (
    <div className="App">
      <Dashboard
        addBall={() => {setScore(addBall(score))}}
        addFoul={() => {setScore(addFoul(score))}}
        addHit={() => {setScore(addHit(score))}}
        addStrike={() => {setScore(addStrike(score))}}
      />
      <Display {...score}/>
    </div>
  );
}

export default App;
