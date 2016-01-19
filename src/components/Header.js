import React from 'react';
import { Link } from 'react-router';


// TODO: move this to separate css / scss / whatevs file
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

const links = {
  'Home': '/',
  'About': '/about',
  'Other': '/other'
};

const Header = () => (
  <div style={headerStyle}>
    <img style={logoStyle} src="static/img/logo-CfD-revx450.png" alt="Code for Denver Logo" />

    <nav>
      {
        Object.keys(links).map(link => (
          <Link to={links[link]} key={link} style={linkStyle}>{ link }</Link>
        ))
      }
    </nav>
  </div>
);

export default Header;
