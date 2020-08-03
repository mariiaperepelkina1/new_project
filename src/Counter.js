import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    function decrementCount() {
        setCount(count - 1);
    }
    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <div className="wrapper">
            <button onClick={decrementCount}>Button -</button>
            <span>{count}</span>
            <button onClick={incrementCount}>Button +</button>
        </div>
    );
}

export default Counter;
