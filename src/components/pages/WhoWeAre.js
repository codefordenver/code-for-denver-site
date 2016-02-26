import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import WhoWeAreContent from '../segments/WhoWeAre';
import GetConnectedContent from '../segments/GetConnected';
import CodeAcrossLink from '../segments/CodeAcrossLink';
import TwitterFeed from '../segments/TwitterFeed';
import SocialMediaLinks from '../segments/SocialMediaLinks';
import Dashboard from '../segments/Dashboard';

const HeroBackground="hero.png";
const HeroTitle= "We Are Code For Denver.";
const HeroContent = <a href="#">We meet almost every Monday. Join us, everyone is welcome!</a>;
const WhoWeAre = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested>
      <CodeAcrossLink />
    </Interested>
    <WhoWeAreContent />
    <GetConnectedContent />
    <section className="standard getconnected">
      <div className="flexgrid-row">
        <SocialMediaLinks />
        <TwitterFeed />
      </div>
    </section>
    <Dashboard />
  </main>
);

export default WhoWeAre;
