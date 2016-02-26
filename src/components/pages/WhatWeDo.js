import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import SkillsAndLanguages from '../segments/SkillsAndLanguages';
import HowItWorks from '../segments/HowItWorks';
import Projects from '../segments/Projects';
import TheCommunity from '../segments/TheCommunity';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-1.jpg";
const HeroTitle= "What we do hero.";
const HeroContent = "What we do hero content";
const WhatWeDo = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <div className='body-content'>
      <HowItWorks />
      <Projects />
      <SkillsAndLanguages />
      <TheCommunity />
    </div>
    <Dashboard />
  </main>
);

export default WhatWeDo;
