import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
