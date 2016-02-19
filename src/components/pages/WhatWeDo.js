import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import SkillsAndLanguages from '../segments/SkillsAndLanguages';
import HowItWorks from '../segments/HowItWorks';
import Projects from '../segments/Projects';
import Statistics from '../segments/Statistics';
import TheCommunity from '../segments/TheCommunity';

const MainText = () => (
    <section className="standard primary">
      <h1>What We Do</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non mauris at tortor laoreet venenatis et id lectus. Duis lobortis ex sed mi facilisis varius. Pellentesque eget dui consequat, pulvinar nulla in, ornare arcu. Nam convallis vel nisi id ornare. Etiam purus ante, elementum in eros sed, commodo commodo nulla. Sed quis elit quis arcu malesuada facilisis. Nam pharetra neque nec turpis scelerisque, vitae ullamcorper magna consectetur. Suspendisse ac scelerisque leo. Nunc venenatis quis libero at suscipit. Mauris et tortor est. Nulla facilisi. Donec ac venenatis nulla. Vivamus placerat, tortor eu sodales finibus, diam enim tincidunt diam, ut porta justo arcu ac nibh. Vivamus at blandit magna, eget bibendum velit. Aliquam vitae ligula blandit, aliquet odio sed, fringilla leo. Phasellus tincidunt ornare facilisis.</p>
    </section>
);

const HeroBackground="cfd-1.jpg";
const HeroTitle= "What we do hero.";
const HeroContent = "What we do hero content";

const WhatWeDo = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested />
    <SkillsAndLanguages />
    <HowItWorks />
    <Projects />
  	<Statistics />
  	<TheCommunity />
  { /* Commenting out this element, not sure it's needed for anything.
    <MainText />
  */ }
  </main>
);

export default WhatWeDo;
