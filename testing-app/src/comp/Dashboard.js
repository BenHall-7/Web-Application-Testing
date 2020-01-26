import React from 'react';

export default function Dashboard({addBall, addHit, addStrike, addFoul}) {
    return (
        <div className="dashboard">
            <button onClick={addStrike}>strike</button>
            <button onClick={addBall}>ball</button>
            <button onClick={addFoul}>foul</button>
            <button onClick={addHit}>hit</button>
        </div>
    )
}