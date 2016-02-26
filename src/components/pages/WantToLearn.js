import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import LearningResources from '../segments/LearningResources';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-8.jpg";
const HeroTitle= "Want to Learn hero.";
const HeroContent = "Want to Learn content";
const WantToLearn = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <div className='body-content'>
    	<LearningResources />
    </div>
    <Dashboard />
  </main>
);

export default WantToLearn;
