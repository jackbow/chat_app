import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import * as serviceWorker from './utilities/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
