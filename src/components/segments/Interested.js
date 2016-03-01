import React from 'react';
import sugardate from 'sugar-date';

const tonightStyle = {
  color: "white",
  padding: ".2rem",
  background: "#2c5577",
  borderRadius:"5px",
  marginLeft: ".25rem"
}

  class Interested extends React.Component {
    constructor() {
      super();
      this.state = {
        nextMeeting:'',
        meetingToday:false
      }
    }

    componentDidMount()
    {
      this.setState({meetingToday: Date.create('today').isMonday() },
      function() {

        if (this.state.meetingToday)
        {
          this.setState({nextMeeting: 'today'});
        }
        else
        {
          this.setState({nextMeeting: 'next monday'});
        }

      });

    }


    render() {

      return (
        <section className="standard">
          <div className="flexgrid-row interested">
            <div className="interested-title">
              <h1>Are You Interested?</h1>
              <h2>Good! We can use your help.</h2>
            </div>
            { this.props.children }
            <div className="interested-calendar">
              <div className="flexgrid-row">
                <div className="calendar-date">
                  <div className="month">{Date.create(this.state.nextMeeting).format('{Month}')}</div>
                  <div className="day">{Date.create(this.state.nextMeeting).format('{d}')}</div>
                </div>
                <div className="calendar-text">
                  <a href="http://www.meetup.com/CodeForDenver/" target="_blank" className="meetup-btn">Join Us for our next Project Night</a>
                  <p className="date">
                    {(() => {
                      if(this.state.meetingToday)
                      {
                        return "Tonight!";
                      }
                      else {
                        return Date.create(this.state.nextMeeting).format('{Weekday}, {Month} {d}, {yyyy}');
                      }
                    })()}
                  <br />6:00 PM to 9:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default Interested;
