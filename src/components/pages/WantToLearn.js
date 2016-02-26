import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import LearningResources from '../segments/LearningResources';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-8.jpg";
const HeroTitle= "Skills++";
const HeroContent = "Learning to code is tough. We get it. We're here to help.";
const WantToLearn = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <LearningResources />
    <Dashboard />
  </main>
);

export default WantToLearn;
