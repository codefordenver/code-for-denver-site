import React from 'react';

import Navigation from './Navigation';
import IntroHeader from './IntroHeader';
import About from './About';
import Projects from './Projects';

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

        <section id="get-involved" className="container content-section">
          <h1>Get Involved</h1>
            <div className="row">
              <div className="container">
                <h1 className="sliding-thing">
                  <span>Are you </span>
                  <div id="pt-main" className="pt-perspective">
                    <div className="pt-page">an Artist?</div>
                    <div className="pt-page">a Writer?</div>
                    <div className="pt-page">a Designer?</div>
                    <div className="pt-page">a Community Organizer?</div>
                    <div className="pt-page">a Developer?</div>
                    <div className="pt-page">a Community Organizer?</div>
                    <div className="pt-page">a Graphic Designer?</div>
                    <div className="pt-page">a Facilitator?</div>
                    <div className="pt-page">a Project Manager?</div>
                    <div className="pt-page">a Government Representative?</div>
                    <div className="pt-page">a Student?</div>
                    <div className="pt-page">an Ally?</div>
                    <div className="pt-page">Curious about Code For Denver?</div>
                  </div>
                </h1>
                <p>Contact <a href="mailto:codefordenver@gmail.com">codefordenver@gmail.com</a> about how you can get involved</p>
                <p>Follow us on <a href="https://github.com/codefordenver">Github</a></p>
              </div>
            </div>
          <p>Here are some ways our volunteers are already getting involved:</p>
          <iframe src="http://codeforamerica.org/geeks/civicissues/widget?organization_name=Code-for-Denver&number=6" width="100%" height="600" frameBorder="0"></iframe>
        </section>

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
