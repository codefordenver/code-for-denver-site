import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';

const HeroBackground="cfd-9.jpg";
const HeroTitle= "Our voice hero.";
const HeroContent = "Our voice hero content";
const OurVoice = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested />
  </main>
);

export default OurVoice;
