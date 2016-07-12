import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import Partner from '../segments/Partner';
import Dashboard from '../segments/Dashboard';

const HeroBackground='cfd-6.jpg';
const HeroTitle= 'Let\'s Build Something Together';
const HeroContent = 'We\'re interested in projects that have direct community impact that can be reapplied and reproduced.';
const WorkWithUs = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <div className='body-content-wrapper'>
      <div className='body-content'>
      	<Partner />
      </div>
    </div>
    <Interested />
    <Dashboard />
  </main>
);

export default WorkWithUs;
