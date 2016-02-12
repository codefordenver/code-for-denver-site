import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';

const MainText = () => (
    <section className="standard primary">
      <h1>Want to Help?</h1>
      <p>Cras quis molestie enim, ac maximus mauris. Sed cursus sapien eu ligula rhoncus, sed dignissim massa ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque rutrum sem a nulla pretium varius. Cras cursus aliquet lectus lacinia hendrerit. Sed consequat sollicitudin vestibulum. Nunc quam diam, vulputate ullamcorper ornare ac, pulvinar at ipsum. Integer vitae neque enim. Nulla facilisi. Cras eget lorem id quam laoreet vulputate. Fusce sit amet mollis felis, at placerat arcu. Duis in varius urna. Vivamus finibus commodo mauris, pellentesque viverra elit scelerisque sit amet.</p>
    </section>
);

const HeroBackground="hero.png";
const HeroTitle= "Want to help hero.";
const HeroContent = "Want to Help hero content";


const WantToHelp = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested />
    <MainText />
  </main>
);

export default WantToHelp;
