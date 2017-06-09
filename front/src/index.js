import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
registerServiceWorker();
