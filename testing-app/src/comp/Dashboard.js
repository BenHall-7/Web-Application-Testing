import React from 'react';

export default function Dashboard({addBall, addHit, addStrike, addFoul}) {
    return (
        <div id="dashboard">
            <button onClick={addHit}>hit</button>
            <button onClick={addStrike}>strike</button>
            <button onClick={addBall}>ball</button>
            <button onClick={addFoul}>foul</button>
        </div>
    )
}