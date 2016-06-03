import React from 'react';

import Hero from '../segments/Hero';
import MarkdownRenderer from '../MarkdownRenderer';

const HeroBackground='cfd-9.jpg';
const HeroTitle= 'National Day of Civic Hacking';
const HeroContent = 'Our voice hero content';
const NDoCH_2016 = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} />
    <section className="standard partner">
      <MarkdownRenderer fileName="ndoch_2016" />
    </section>
  </main>
);

export default NDoCH_2016;
