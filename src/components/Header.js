import React from 'react';
import { Link } from 'react-router';


// TODO: move this to separate css / scss / whatevs file

/*
const logoStyle = {
  height: '40px'
};
const primaryRed = '#E24E54';
const headerStyle = {
  backgroundColor: primaryRed,
  textAlign: 'center'
};
const linkStyle = {
  color: primaryRed,
  backgroundColor: 'white',
  margin: '0 5px',
  padding: '5px'
};
*/

const links = {
  'Who We Are': '/',
  'What We Do': '/about',
  'Want to Help?': '/other',
  'Our Stories' : '/',
  'Vital Statistics' : '/',
  'Our Partners' : '/'
};

const Header = () => (

  <header className="mainheader">
    <img className="mainlogo" src="static/img/logo-bw.png" />
    <nav className="mainnav">
      <ul>
        {
          Object.keys(links).map(link => (
            <li className="mainnav-link" key={link}><Link to={links[link]}>{ link }</Link></li>
          ))
        }
      </ul>
    </nav>
  </header>





  /*
  <div style={headerStyle}>
    <img style={logoStyle} src="static/img/logo-CfD-revx450.png" alt="Code for Denver Logo" />

    <nav>

    </nav>
  </div>
  */
);

export default Header;
