import React from 'react';
import { Link, IndexLink } from 'react-router';


class Header extends React.Component {
  render() {
    return (
      <header className="mainheader">
        <a href="/">
          <img alt="Code for Denver" className="mainlogo" src="static/img/logo-bw.png" />
        </a>
        <nav className="mainnav">
          <ul>
            <li className="mainnav-link">
              <IndexLink to="/" activeClassName="current">Who We Are</IndexLink>
            </li>
            <li className="mainnav-link">
              <Link to="/WhatWeDo" activeClassName="current">What We Do</Link>
            </li>
            <li className="mainnav-link">
              <Link to="/WantToHelp" activeClassName="current">Want To Help?</Link>
            </li>
            <li className="mainnav-link">
              <Link to="/WorkWithUs" activeClassName="current">Work With Us</Link>
            </li>
            <li className="mainnav-link">
              <Link to="/WantToLearn" activeClassName="current">Want To Learn?</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
