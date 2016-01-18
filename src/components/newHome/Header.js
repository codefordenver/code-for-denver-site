import React from 'react';

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

const links = [
  'Who We Are',
  'Want To Help?',
  'What We Do',
  'Our Stories',
  'Vital Statistics',
  'Our Partners'
];

const Header = () => (
  <div style={headerStyle}>
    <img style={logoStyle} src="static/img/logo-CfD-revx450.png" alt="Code for Denver Logo" />

    <nav>
      {
        links.map(link => (
          <a key={link} style={linkStyle}>{ link }</a>
        ))
      }
    </nav>
  </div>
);

export default Header;
