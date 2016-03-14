import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import routes from './routes';



ReactDOM.render(
  <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0,0)} />
  , document.getElementById('site'));