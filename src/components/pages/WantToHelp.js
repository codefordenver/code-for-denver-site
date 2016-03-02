import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import Volunteer from '../segments/Volunteer';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-10.jpg";
const HeroTitle= "Everyone Is Welcome";
const HeroContent = "Great applications aren't just built by developers.";
const WantToHelp = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <div className='body-content-wrapper'>
      <div className='body-content'>
      	<Volunteer />
      </div>
    </div>
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <div className='body-content-wrapper'>
      <div className='body-content'>
      	<Volunteer />
      </div>
    </div>
    <Dashboard />
  </main>
);

export default WantToHelp;
