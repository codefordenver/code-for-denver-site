import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import WhoWeAreContent from '../segments/WhoWeAre';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import TwitterFeed from '../segments/TwitterFeed';
import SocialMediaLinks from '../segments/SocialMediaLinks';
import Dashboard from '../segments/Dashboard';

const HeroBackground="cfd-1.jpg";
const HeroTitle= "We Are Code For Denver";
const HeroContent = "We meet almost every Monday. Join us, everyone is welcome!"
const WhoWeAre = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <div className='body-content'>
      <WhoWeAreContent />
      <section className="standard getconnected">
        <div className="flexgrid-column">
          <SocialMediaLinks />
          <TwitterFeed />
        </div>
      </section>
    </div>
    <Dashboard />
  </main>
);

export default WhoWeAre;
