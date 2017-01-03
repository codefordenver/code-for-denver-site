import React from 'react';

const IntroHeader = () => (
  <header className="intro">
    <div className="intro-body">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h1 className="brand-heading">Code for Denver</h1>
            <p className="intro-text">Strengthening Our Community</p>
            <a href="#about" className="btn btn-circle page-scroll">
              <i className="fa fa-angle-double-down animated" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="sparktime-tracker">
      <h4>Tracked Volunteer time</h4>
      <iframe src="http://sparktime.org/w/11/timer-only" />
      <div className="spark-text">
        To check in, text
        <span className="text-msg">
          &quot;<strong>In with Code for Denver</strong>&quot;
        </span>
        <br />
        to <strong>929-BIG-HELP (244-4357)</strong>
      </div>
    </div>
  </header>
);

export default IntroHeader;
