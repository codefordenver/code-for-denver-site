import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';


const App = (props) => (

    <div>
      <Header />
      { props.children }
      <Footer />
    </div>
  );

export default App;