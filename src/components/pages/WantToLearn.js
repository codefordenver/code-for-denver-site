import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import MarkdownRenderer from '../MarkdownRenderer';

const HeroBackground="cfd-8.jpg";
const HeroTitle= "Want to Learn hero.";
const HeroContent = "Want to Learn content";
const WantToLearn = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <section className="standard primary">
    	<MarkdownRenderer fileName="learn" />
    </section>
    <Interested />
  </main>
);

export default WantToLearn;
