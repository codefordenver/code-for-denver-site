import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import SkillsAndLanguages from '../segments/SkillsAndLanguages';
import HowItWorks from '../segments/HowItWorks';
import Projects from '../segments/Projects';
import TheCommunity from '../segments/TheCommunity';

const HeroBackground="cfd-1.jpg";
const HeroTitle= "What we do hero.";
const HeroContent = "What we do hero content";
const WhatWeDo = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <HowItWorks />
    <Projects />
    <SkillsAndLanguages />
    <TheCommunity />
  </main>
);

export default WhatWeDo;
