import React from 'react';
import { useState } from 'react';

function App() {
    const [color, setColor] = useState('#d6909c');

    function changeColor() {
        setColor('#000');
    }

    return (
        <div className="wrapper">
            <h1>Homework</h1>
            <button className="button" onClick={changeColor}>
                Press me!
            </button>
            <div className="square">{color}</div>
        </div>
    );
}

export default App;
