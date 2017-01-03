import React, { PropTypes } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const App = props => (
  <div>
    <Header />
    { props.children }
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
