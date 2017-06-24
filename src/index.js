import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
