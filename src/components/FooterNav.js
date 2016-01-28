import React from 'react';

const FooterNav = () => (
  <nav className="footer-nav">
    <div className="flexgrid-row">
      <div className="footer-nav-col">
        <ul>
          <li>Home</li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>About CfD</li>
          <li><a href="#">Who We Are</a></li>
          <li><a href="#">When &amp; Where</a></li>
          <li><a href="#">What We’re Doing</a></li>
          <li><a href="#">Our Stories</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>We need your help!</li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#">Member Skills</a></li>
          <li><a href="#">MeetUp.com</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Can We Help You?</li>
          <li><a href="#">Pitch your project!</a></li>
          <li><a href="#">Our pitch guidelines</a></li>
        </ul>


        <ul>
          <li>Our Partners</li>
          <li><a href="#">Our projects portfolio</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Our Supporters</li>
          <li><a href="#">Become a Supporter</a></li>
          <li><a href="#">Donate to Code for Denver</a></li>
          <li><a href="#">Tell a Friend about CfD</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Social</li>
          <li><a href="#"><i className="fa fa-facebook-official"></i> Facebook</a></li>
          <li><a href="#"><i className="fa fa-twitter-square"></i> Twitter</a></li>
          <li><a href="#"><i className="fa fa-youtube-square"></i> YouTube</a></li>
          <li><a href="#"><i className="fa fa-github-square"></i> GitHub</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default FooterNav;
