import React, { useState } from 'react';

function Homework() {
    const [color, setColor] = useState('pink');
    const changeColor = () => {
        setColor('black');
    };

    return (
        <div className="wrapper">
            <h1>Homework</h1>
            <button className="button" onClick={changeColor}>
                Press me!
            </button>
            <div className="square" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}

export default Homework;
