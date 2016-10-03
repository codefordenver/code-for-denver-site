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
          <li>We Need Your Help!</li>
          <li><Link to="/WantToHelp">Get Involved</Link></li>
          <li><a href="http://www.meetup.com/codefordenver" target='blank'>MeetUp.com</a></li>
          <li><Link to="/members">Members Resources</Link></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Work With Us</li>
          <li><Link to="/WorkWithUs">Our pitch guidelines</Link></li>
        </ul>


        <ul>
          <li>Our Partners</li>
          <li><Link to="/WhatWeDo#projects">Our projects portfolio</Link></li>
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
