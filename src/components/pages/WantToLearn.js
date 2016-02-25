import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import LearningResources from '../segments/LearningResources';
import MarkdownRenderer from '../MarkdownRenderer';

const HeroBackground="cfd-8.jpg";
const HeroTitle= "Want to Learn hero.";
const HeroContent = "Want to Learn content";
const WantToLearn = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <LearningResources />
  </main>
);

export default WantToLearn;
