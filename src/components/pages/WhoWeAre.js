import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import WhoWeAreContent from '../segments/WhoWeAre';
import TwitterFeed from '../segments/TwitterFeed';
import SocialMediaLinks from '../segments/SocialMediaLinks';
import Dashboard from '../segments/Dashboard';
import VimeoVideo from '../segments/VimeoVideo';

const HeroBackground='cfd-1.jpg';
const HeroTitle= 'We Are Code For Denver';
const HeroContent = 'We meet almost every Monday. Join us, everyone is welcome!'
const WhoWeAre = () => (
  <main>
    <Hero className='hero' background={HeroBackground} title={HeroTitle} content={HeroContent} position="top" />
    <Interested />
    <div className='body-content-wrapper'>
      <div className='body-content'>
        <div className="temp-resource-link">
          <h3>
            <a href="/NDoCH_2016">
              National Day of Civic Hacking Resources
            </a>
          </h3>
        </div>
        <WhoWeAreContent />
        <VimeoVideo />
        <section className="standard getconnected">
          <div className="flexgrid-column">
            <SocialMediaLinks />
            <TwitterFeed />
          </div>
        </section>
      </div>
    </div>
    <Dashboard />
  </main>
);

export default WhoWeAre;
