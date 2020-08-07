import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';

import './components/Homework/homework.css'; 
import './components/Homework_2/homework_2.css'; 

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
