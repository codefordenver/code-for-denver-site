import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';

const MainText = () => (
    <section className="standard primary">
      <h1>Our Voice</h1>
      <p>Integer auctor molestie purus eu pretium. Donec porta iaculis ornare. Mauris eget ante vel neque vehicula vulputate. Donec in nunc laoreet, pellentesque justo vitae, sodales turpis. Quisque mollis urna vel mattis tristique. Cras in eleifend leo. Quisque erat orci, tristique quis est vel, pulvinar hendrerit erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst.</p>
    </section>
);

const HeroBackground="cfd-9.jpg";
const HeroTitle= "Our voice hero.";
const HeroContent = "Our voice hero content";


const OurVoice = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested />
    <MainText />
  </main>
);

export default OurVoice;
