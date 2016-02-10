import React from 'react';

const GetConnected = () => (
  <section className="standard getconnected">
    <div className="flexgrid-row">
      <div className="getconnected-links">
        <h1>Get Connected!</h1>
        <p>We work in groups, together and we work online.
          Get connected, get involved  and lend us your passion,
          your voice and your skills.</p>
        <p>
          <a className="social-link" href="#"><i className="fa fa-facebook-official"></i></a>
          <a className="social-link" href="#"><i className="fa fa-twitter-square"></i></a>
          <a className="social-link" href="#"><i className="fa fa-pinterest-square"></i></a>
          <a className="social-link" href="#"><i className="fa fa-github-square"></i></a>
          <a className="social-link" href="#"><i className="fa fa-google-plus-square"></i></a>
          <a className="social-link" href="#"><i className="fa fa-youtube-square"></i></a>
        </p>
      </div>
      <div className="twitter-widget">
        <a className="twitter-timeline" href="https://twitter.com/CodeForDenver" data-widget-id="691806964364505088">Tweets by @CodeForDenver</a>
        <script src="static/js/twitter-widget.js"></script>
      </div>
    </div>

  </section>
);

export default GetConnected;
