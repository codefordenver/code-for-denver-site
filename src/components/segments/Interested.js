import React from 'react';

const Interested = () => (
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
);

export default Interested;
