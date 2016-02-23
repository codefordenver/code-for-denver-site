import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import MarkdownRenderer from '../MarkdownRenderer';

const HeroBackground="cfd-6.jpg";
const HeroTitle= "Can We Help You hero.";
const HeroContent = "Can We Help You hero content";
const CanWeHelpYou = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <section className="standard primary">
      <MarkdownRenderer fileName="partner" />
    </section>
    <Interested />
  </main>
);

export default CanWeHelpYou;
