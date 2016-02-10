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


const OtherPage = () => (
  <section className="standard">
    <h1>Other Content</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
  </section>
);

// const App = ({ children }) => (

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
      <Route path="other" component={OtherPage}/>
      <Route path="volunteer" component={Volunteer}/>
      <Route path="partner" component={Partner}/>
      <Route path="*" component={notFound} />
    </Route>
  </Router>
), document.getElementById('site'));
