import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Header from './components/Header';
import About from './components/home/About';

const Home = () => (
  <div>
    <h1>
      Home Content
    </h1>
  </div>
);

const OtherPage = () => (
  <div>
    <p>
      Other Content
    </p>
  </div>
);

const App = ({ children }) => (
  <div>
    <Header />

    { children }
  </div>
);

const notFound = () => (
  <div>
    <h1>Not Found :(</h1>
  </div>
);

const history = createHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="other" component={OtherPage}/>
      <Route path="*" component={notFound} />
    </Route>
  </Router>
), document.getElementById('site'));
