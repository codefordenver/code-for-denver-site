import React from 'react';
var sugardate = require('sugar-date');

var nextMeeting;

if (Date.create('today').isMonday())
{
  nextMeeting = 'today';
}
else
{
  nextMeeting = 'next monday';
}

  class Interested extends React.Component {

    render() {

      return (
        <section className="standard interested">
        {console.log(nextMeeting)}
          <div className="flexgrid-row">
            <div className="interested-title">
              <h1>Are You Interested?</h1>
              <h2>Good! We can use your help.</h2>
            </div>
            <div>
              { this.props.children }
            </div>
            <div className="interested-calendar">
                <div className="flexgrid-row">
                  <div className="calendar-date">
                    <div className="month">{Date.create(nextMeeting).format('{Month}')}</div>
                    <div className="day">{Date.create(nextMeeting).format('{d}')}</div>
                  </div>
                  <div className="calendar-text">
                    <a href="http://www.meetup.com/CodeForDenver/" target="_blank" className="meetup-btn">Join Us for our next Project Night</a>
                    <p className="date">{Date.create(nextMeeting).format('{Weekday}, {Month} {d}, {yyyy}')}
                    <br />6:00 PM to 9:00PM</p>
                  </div>
                </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default Interested;
