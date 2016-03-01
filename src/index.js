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
import WhatWeDo from './components/pages/WhatWeDo';
import WantToHelp from './components/pages/WantToHelp';
import CanWeHelpYou from './components/pages/CanWeHelpYou';
import OurVoice from './components/pages/OurVoice';
import WantToLearn from './components/pages/WantToLearn';

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
      <Route path="WhoWeAre" component={WhoWeAre}/>
      <Route path="WhatWeDo" component={WhatWeDo}/>
      <Route path="WantToHelp" component={WantToHelp}/>
      <Route path="CanWeHelpYou" component={CanWeHelpYou}/>
      <Route path="OurVoice" component={OurVoice}/>
      <Route path="WantToLearn" component={WantToLearn}/>
      <Route path="*" component={notFound} />
    </Route>
  </Router>
), document.getElementById('site'));
