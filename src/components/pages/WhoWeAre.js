import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';

import GetConnected from '../segments/GetConnected';
import Dashboard from '../segments/Dashboard';

const MainText = () => (
    <section className="standard primary">
      <h1>Who We Are</h1>
      <p><a href="#">Code for Denver</a> is a dedicated, cooperative and diverse group of volunteers.
        We are dedicated to the creation of civic technology aimed squarely at solving
        the problems of the world around us.</p>
      <p>We are technologists, programmers, visual and graphic designers,
        product managers, community organizers, students, researchers, developers,
        ux’ers and geeks. We are mothers and brothers and sisters and citizens.
        <strong>We may not all be coders, but we are all working for a better Denver,
        a better America, and a better tomorrow.</strong></p>
      <p><a href="#">Learn more about what we do, and how and why we do it!</a></p>
    </section>
);

const HeroBackground="hero.png";

const HeroTitle= "We Are Code For Denver.";

const HeroContent = <p><a href="#">We meet almost every Monday. Join us, everyone is welcome!</a></p>;

const WhoWeAre = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested />
    <MainText />
    <GetConnected />
    <Dashboard />
  </main>
);

export default WhoWeAre;
