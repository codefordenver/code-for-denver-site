import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import HowItWorks from '../segments/HowItWorks';
import Projects from '../segments/Projects';
import TheCommunity from '../segments/TheCommunity';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-2.jpg";
const HeroTitle= "Technology For The Community";
const HeroContent = "We apply the power of modern technology to community challenges in Denver.";
const WhatWeDo = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} position="top" />
    <div className='body-content-wrapper'>
      <div className='body-content'>
        <HowItWorks />
        <Projects />
        <TheCommunity />
      </div>
    </div>
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <Dashboard />
  </main>
);

export default WhatWeDo;
