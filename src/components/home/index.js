import React from 'react';

import Navigation from './Navigation';
import IntroHeader from './IntroHeader';
import About from './About';
import Projects from './Projects';
import GetInvolved from './GetInvolved';

export default class Home extends React.Component {
  componentDidMount() {
    window.PageTransitions();
  }

  render() {
    return (
      <div>
        <Navigation />
        <IntroHeader />

        <About />

        <Projects />

        <GetInvolved />

        <section id="meetups" className="container content-section">
          <div className="row">
            <div className="col-md-8">
            <h2>Meetups</h2>
            <p>
              We meet often. Come join us! View our Meetups <a href="http://www.meetup.com/Colorado-Code-for-Communities/">here</a>
            </p>

            <div id="meetups-container">
              {/*<!-- .hbs autofilled here -->*/}
            </div>
            </div>
            <div className="col-md-4">
            <h2>Twitter</h2>
            <a className="twitter-timeline"
              data-widget-id="613161059080212480"
              href="https://twitter.com/CodeForDenver"
              width="300"
              height="340"
              data-chrome="noborders">
            Tweets by @CodeForDenver
            </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
