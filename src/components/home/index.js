import React from 'react';

import Navigation from './Navigation';
import IntroHeader from './IntroHeader';

export default class Home extends React.Component {
  componentDidMount() {
    window.PageTransitions();
  }

  render() {
    return (
      <div>
        <Navigation/>
        <IntroHeader/>

        <section id="about" className="container content-section">
          <h1>About</h1>
          <p>
            We believe technology and innovation are powerful tools we can all use to make our community an even more spectacular place to live.
          </p>
          <p>
            We are a diverse group of volunteers who are passionate about leveraging the power of technology to benefit the people of our Denver community.
          </p>
          <p>
            We tap into the potential of technology to tackle issues like food systems, food security, economic development, safety and justice.
          </p>
          <p>
            We recognize that we are a part of a much larger movement to address some of the challenges that face our planet. In order to collectively have the biggest impact, we work in partnership and collaboration with both local government, and the international network of Code for America brigades of which we are a part.
          </p>
          <p>
            We also team up with local nonprofits and other active community members to make sure we understand the issues, to brainstorm technology-based solutions, and to actualize our ideas in ways that aim for measurable community benefit.
          </p>
        </section>

        <section id="projects" className="container content-section">
          <h2>Projects</h2>
          <div id="projects-container">
            {/*<!-- .hbs autofilled here -->*/}
          </div>
          <br/>
          <br/>
          <h3>Nonprofit partnership program:</h3>
          <p>
            <a href="/CodeAcross/"><b>CodeAcross 2015</b></a> kick started our very anticipated <b>Nonprofit Partnership Program</b>. For these projects we will be collaborating very closely with the following nonprofits:
          </p>
          <ul>
            <li><b>Colorado Antiviolence Program</b></li>
            <li><b>Rocky Mountain MicroFinance Institute</b></li>
            <li><b>Grow Local Colorado</b></li>
            <li><b>Rocky Mountain Farmers Union</b></li>
          </ul>
          <p>
            Find out how you can get involved below.
          </p>
        </section>

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
