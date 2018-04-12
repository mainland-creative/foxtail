import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Radium from 'radium'

ReactDOM.render(<Radium.StyleRoot><App /></Radium.StyleRoot>, document.getElementById('root'));
registerServiceWorker();
