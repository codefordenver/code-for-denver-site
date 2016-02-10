import React from 'react';
import { Link } from 'react-router';
var classNames = require('classnames');

// TODO: move this to separate css / scss / whatevs file

const links = {
  /*
  'Who We Are': '/',
  'What We Do': '/about',
  'Want to Help?': '/volunteer',
  'Can We Help You?' : '/partner',
  'Blog' : '/#',
  'Support Us' : '/#'
*/

'Who We Are': '/',
'What We Do': '/WhatWeDo',
'Want To Help': '/WantToHelp',
'Can We Help You': '/CanWeHelpYou',
'Our Voice': '/OurVoice',
'Support Us': '/SupportUs'

};

class Header extends React.Component {


render (){
return (
  <header className="mainheader">
    <img className="mainlogo" src="static/img/logo-bw.png" />
    <nav className="mainnav">
      <ul>
        {
          Object.keys(links).map(link => {
            var classes = classNames("mainnav-link",{"current" : this.props.path===links[link]})
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
