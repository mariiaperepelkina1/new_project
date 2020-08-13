import React, { useState } from 'react';
import { cx, css } from 'emotion';

import Homework from './components/Homework';
import Counter from './components/Counter';
import Homework2 from './components/Homework_2';
import { Lesson2 } from './components/Lesson_2';
import { MyContext } from './context';

function App() {
    const [color, setColor] = useState('red');
    const [theme, setTheme] = useState('dark');

    return (
        <MyContext.Provider value={{ color }}>
            <div
                className={cx(
                    theme === 'dark'
                        ? css`
                              --myColor: black;
                          `
                        : css`
                              --myColor: green;
                          `,
                    'App'
                )}
            >
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    change theme
                </button>
                <Homework />
                <Counter />
                <Homework2 />
                <Lesson2 color={color} />
            </div>
        </MyContext.Provider>
    );
}

export default App;
