import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import Volunteer from '../segments/Volunteer';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-10.jpg";
const HeroTitle= "Want to help hero.";
const HeroContent = "Want to Help hero content";
const WantToHelp = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <Volunteer />
    <Dashboard />
  </main>
);

export default WantToHelp;
