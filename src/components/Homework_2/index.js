import React from 'react';
import { useState } from 'react'; 



/**
 * Нужно написать кнопку "светофор": она меняет свой цвет => красный -> жёлтый -> зелёный
 */
const Homework2 = () => {
    /**
     * Подсказка:
     * if ()
     * Если кнопка красная, то сделать жёлтой
     * Если кнопка жёлтая, то сделать зелёной ...
     */
    const[color, setColor] = useState('red'); 
    const changeColor = () => {
        switch (color) {
            case 'red':
                setColor('yellow'); 
                break; 
            case 'yellow':
                setColor('green'); 
                break; 
            case 'green':
                setColor('red'); 
                break; 
        }
    };

    return <div className="wrapper">
        <button className="button button--traffic" onClick={changeColor} style={{backgroundColor: color}}>{color}</button>
    </div>;
};

export default Homework2;
