import React from 'react';

export default function Display({ball, strike}) {
    return (
        <div id="display">
            <p>Ball: {ball}</p>
            <p>Strike: {strike}</p>
        </div>
    )
}