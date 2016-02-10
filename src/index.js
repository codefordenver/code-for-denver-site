import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/home/About';
import Volunteer from './components/home/Volunteer';
import Partner from './components/home/Partner';

import WhoWeAre from './components/pages/WhoWeAre';

const App = (props) => {
  const {children} = props;

  return (

  <div>
    <Header path={props.location.pathname} />
    { children }
    <Footer />
  </div>
);
}

const notFound = () => (
  <div>
    <h1>Not Found :(</h1>
  </div>
);

const history = createHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={WhoWeAre}/>
      <Route path="about" component={About}/>
      <Route path="volunteer" component={Volunteer}/>
      <Route path="partner" component={Partner}/>
      <Route path="*" component={notFound} />
    </Route>
  </Router>
), document.getElementById('site'));
