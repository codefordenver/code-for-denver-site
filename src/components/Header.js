import React from 'react';
import { Link } from 'react-router';
var classNames = require('classnames');

const links = {
'Who We Are': '/',
'What We Do': '/WhatWeDo',
'Want To Help?': '/WantToHelp',
'Can We Help You?': '/CanWeHelpYou',
//'Our Voice': '/OurVoice',
'Want to Learn?': '/WantToLearn'
};

class Header extends React.Component {
  render (){
    return (
      <header className="mainheader">
        <a href="/">
          <img className="mainlogo" src="static/img/logo-bw.png"/>
        </a>
        <nav className="mainnav">
          <ul>
            {
              Object.keys(links).map(link => {
                const classes = classNames('mainnav-link', { 'current' : this.props.path === links[link] });
                return(
                  <li className={classes} key={link}><Link to={links[link]}>{ link }</Link></li>
                );
              })
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
