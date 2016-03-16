import React from 'react';
import moment from 'moment';


class MeetupDate extends React.Component {

	render() {

		return this.props.loading ? (
			<div className="interested-calendar">
        <div className="flexgrid-row">
          <div className="calendar-date">
            <div className="month">Month</div>
            <div className="day">00</div>
          </div>
          <div className="calendar-text">
            <a href="#" target="_blank" className="meetup-btn">Join others at our next Project Night</a>
            <p className="date">
              <br />6:00 PM to 9:00PM
            </p>
          </div>
        </div>
      </div>
		)	: (
			<div className="interested-calendar">
        <div className="flexgrid-row">
          <div className="calendar-date">
            <div className="month">{this.props.meetup.start_time.format('MMMM')}</div>
            <div className="day">{this.props.meetup.start_time.format('D')}</div>
          </div>
          <div className="calendar-text">
            <a href={this.props.meetup.event_url} target="_blank" className="meetup-btn">Join {this.props.meetup.rsvps} others at our next Project Night</a>
            <p className="date">
            	{this.props.meetup.start_time.format('dddd, MMMM Do, YYYY')}
              <br />6:00 PM to 9:00PM
            </p>
          </div>
        </div>
      </div>
		)
	}
}

export default MeetupDate;