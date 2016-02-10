import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Header from './components/Header';
import About from './components/home/About';

import Volunteer from './components/home/Volunteer';
import Partner from './components/home/Partner';

import Hero from './components/Hero';
import Interested from './components/Interested';

import GetConnected from './components/GetConnected';
import Dashboard from './components/Dashboard';

import Footer from './components/Footer';



const Home = () => (
    <section className="standard primary">
      <h1>Who We Are</h1>
      <p><a href="#">Code for Denver</a> is a dedicated, cooperative and diverse group of volunteers.
        We are dedicated to the creation of civic technology aimed squarely at solving
        the problems of the world around us.</p>
      <p>We are technologists, programmers, visual and graphic designers,
        product managers, community organizers, students, researchers, developers,
        ux’ers and geeks. We are mothers and brothers and sisters and citizens.
        <strong>We may not all be coders, but we are all working for a better Denver,
        a better America, and a better tomorrow.</strong></p>
      <p><a href="#">Learn more about what we do, and how and why we do it!</a></p>
    </section>
);

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
    <Hero />
    <Interested />

    <main>
    { children }
    <GetConnected />
    <Dashboard />
    </main>

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
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="other" component={OtherPage}/>
      <Route path="volunteer" component={Volunteer}/>
      <Route path="partner" component={Partner}/>
      <Route path="*" component={notFound} />
    </Route>
  </Router>
), document.getElementById('site'));
