import React from 'react';

const Sponsors = () => (
  <section className="standard sponsors">
    <div className="flexgrid-row">
      <div className="sponsors-sponsor">
        <div className="sponsor-garycommunity">
          <a href="http://www.garycommunity.org/" target="_blank" rel="noopener noreferrer">
            <img src="static/img/sponsor-gary_community_investments.png" />
          </a>
        </div>
      </div>

      <div className="sponsors-codefordenver">
        <p><img src="static/img/logo-notext-red.png" /></p>
        <p>Code For Denver is generously supported by:</p>
      </div>

      <div className="sponsors-sponsor">
        <div className="sponsor-ca">
          <a href="http://www.ca.com/" target="_blank" rel="noopener noreferrer">
            <img src="static/img/sponsor-ca_technologies.png" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsors;
