import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import Partner from '../segments/Partner';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-6.jpg";
const HeroTitle= "Can We Help You hero.";
const HeroContent = "Can We Help You hero content";
const CanWeHelpYou = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <div className='body-content'>
    	<Partner />
    </div>
    <Dashboard />
  </main>
);

export default CanWeHelpYou;
