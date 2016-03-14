import React from 'react';
import { Link } from 'react-router';

const FooterNav = () => (
  <nav className="footer-nav">
    <div className="flexgrid-row">
      <div className="footer-nav-col">
        <ul>
          <li>Home</li>
          <li><a href="mailto:codefordenver@gmail.com" target='blank'>Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>About CfD</li>
          <li><Link to="/">Who We Are</Link></li>
          <li><Link to="/WhatWeDo">What We’re Doing</Link></li>
          <li><a href="http://www.codefordenver.org/2015/">2015 Review</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>We need your help!</li>
          <li><Link to="/WantToHelp">Get Involved</Link></li>
          <li><a href="http://www.meetup.com/codefordenver" target='blank'>MeetUp.com</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Can We Help You?</li>
          <li><Link to="/CanWeHelpYou">Our pitch guidelines</Link></li>
          <li><a href="https://docs.google.com/forms/d/1OJM4j7vDuaJhNAsgmMvggJ5CBIqlZghdx2wY1fvp7L0/viewform">Pitch your project!</a></li>
        </ul>


        <ul>
          <li>Our Partners</li>
          <li><a href="/WhatWeDo#projects">Our projects portfolio</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Our Supporters</li>
          { /* <li><a href="#">Become a Supporter</a></li> */ }
          <li><a href="https://secure.codeforamerica.org/page/contribute/default?brigade=Code%20For%20Denver" target='blank'>Donate to Code for Denver</a></li>
          { /* <li><a href="#">Tell a Friend about CfD</a></li> */ }
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Social</li>
          <li><a href="http://www.twitter.com/codefordenver"><i className="fa fa-twitter-square"></i> Twitter</a></li>
          <li><a href="http://www.github.com/codefordenver"><i className="fa fa-github-square"></i> GitHub</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default FooterNav;
