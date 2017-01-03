import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import LearningResources from '../segments/LearningResources';
import Dashboard from '../segments/Dashboard';

const HeroBackground = 'cfd-8.jpg';
const HeroTitle = 'Skills++';
const HeroContent = 'Learning to code is tough. We get it. We\'re here to help.';

const WantToLearn = () => (
  <main>
    <Hero className="hero" background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <div className="body-content-wrapper">
      <div className="body-content">
        <LearningResources />
      </div>
    </div>
    <Interested />
    <Dashboard />
  </main>
);

export default WantToLearn;
