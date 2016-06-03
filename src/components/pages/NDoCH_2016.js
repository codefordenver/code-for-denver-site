import React from 'react';

import Hero from '../segments/Hero';
import MarkdownRenderer from '../MarkdownRenderer';

const HeroBackground='cfd-9.jpg';
const HeroTitle= 'National Day of Civic Hacking';
const HeroContent = 'Our voice hero content';
const NDoCH_2016 = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} />
    <div className='body-content-wrapper'>
      <div className='body-content'>
        <section className="standard ndoch-2016">
          <MarkdownRenderer fileName="ndoch_2016" />
        </section>
      </div>
    </div>
  </main>
);

export default NDoCH_2016;
