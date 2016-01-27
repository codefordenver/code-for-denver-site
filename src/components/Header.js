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
<div>
  <header className="mainheader">
    <img className="mainlogo" src="static/img/logo-bw.png" />
    <nav className="mainnav">
      <ul>
        <li className="mainnav-link current"><a href="#" data-color="#e24e54">Who We Are</a></li>
        <li className="mainnav-link"><a href="#" data-color="#fdbf46">What We Do</a></li>
        <li className="mainnav-link"><a href="#" data-color="#26849e">Want to Help?</a></li>
        <li className="mainnav-link"><a href="#" data-color="#611305">Our Stories</a></li>
        <li className="mainnav-link"><a href="#" data-color="#611305">Vital Statistics</a></li>
        <li className="mainnav-link"><a href="#" data-color="#41284a">Our Partners</a></li>
      </ul>
    </nav>
  </header>


  <section className="hero">
    <div className="intro">
      <h1>We Are Code For Denver.</h1>
      <p><a href="#">We meet almost every Monday. Join us, everyone is welcome!</a></p>
    </div>
  </section>

  <section className="standard interested">
    <div className="flexgrid-row">
      <div className="interested-title">
        <h1>Are You Interested?</h1>
        <h2>Good! We can use your help.</h2>
      </div>
      <div className="interested-calendar">
          <div className="flexgrid-row">
            <div className="calendar-date">
              <div className="month">January</div>
              <div className="day">25</div>
            </div>
            <div className="calendar-text">
              <a href="#" className="meetup-btn">Join Us for our next Project Night</a>
              <p className="date">Monday, January 25, 2016<br />6:00 PM to 9:00PM</p>
            </div>
          </div>
      </div>
    </div>
  </section>


  </div>

  /*
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
  */
);

export default Header;
