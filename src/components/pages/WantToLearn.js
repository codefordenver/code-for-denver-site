import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';

const MainText = () => (
    <section className="standard primary">
      <h1>Support Us</h1>
      <p>Praesent in purus nunc. Morbi facilisis scelerisque nibh, nec venenatis sem ullamcorper non. Sed porttitor vulputate urna sed imperdiet. Nullam sit amet odio vitae ligula tristique condimentum vitae non lorem. Duis pharetra nulla nec magna tincidunt vulputate. Mauris facilisis porta mattis. Sed placerat facilisis dignissim. In dignissim enim purus, ac laoreet leo cursus vitae. Curabitur et nunc vel mauris interdum aliquam. Mauris vestibulum felis eu fringilla venenatis. Etiam efficitur arcu in viverra blandit. Curabitur iaculis ante lacus, eget venenatis tellus semper non. Vivamus non ex nec neque feugiat fringilla. Nam ornare nec enim sed scelerisque.</p>
    </section>
);

const HeroBackground="cfd-8.jpg";
const HeroTitle= "Want to Learn hero.";
const HeroContent = "Want to Learn content";


const WantToLearn = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested />
    <MainText />
  </main>
);

export default WantToLearn;
