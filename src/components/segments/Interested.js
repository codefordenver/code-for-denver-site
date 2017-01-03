import React from 'react';

import Promo2015 from './Promo2015';
import MeetupsContainer from './MeetupsContainer';

const Interested = () => (
  <section className="standard">
    <div className="flexgrid-row interested">
      <a href="http://www.meetup.com/codefordenver/" target="_blank" rel="noreferrer noopener">
        <div className="interested-title">
          <h1>Are You Interested?</h1>
          <h2>Good! We can use your help.</h2>
        </div>
      </a>
      <Promo2015 />
      <MeetupsContainer />
    </div>
  </section>
);

export default Interested;
