import React from 'react';

const Navigation = () => (
  <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
          <i className="fa fa-bars"></i>
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          Code for Denver
        </a>
      </div>

      <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
        <ul className="nav navbar-nav">
          <li className="hidden">
            <a href="#page-top"></a>
          </li>
          <li>
            <a className="page-scroll" href="#about">About</a>
          </li>
          <li>
            <a className="page-scroll" href="#projects">Projects</a>
          </li>
          <li>
            <a className="page-scroll" href="#get-involved">Get Involved</a>
          </li>
          <li>
            <a className="page-scroll" href="#meetups">Meetups</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navigation;
