import React from 'react';
import moment from 'moment';


class MeetupDate extends React.Component {

  render() {

    return (
      <div className="interested-calendar">
        <div className="flexgrid-row">
          <div className="calendar-date">
            <div className="month">{this.props.date.format('MMMM')}</div>
            <div className="day">{this.props.date.format('D')}</div>
          </div>
          <div className="calendar-text">
            <a href={this.props.event_url} target="_blank" className="meetup-btn">Join {this.props.rsvps} others at our next event!</a>
            <p className="date">{this.props.name}</p>
            <p className="date">
              {this.props.date.format('dddd, MMMM Do, YYYY')}
              <br />6:00 PM to 9:00PM
            </p>
          </div>
        </div>
      </div>
    )
  }
}

MeetupDate.propTypes = {
  date: React.PropTypes.object.isRequired,
  rsvps: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
};

MeetupDate.defaultProps = {
  date: moment.unix(0),
  rsvps: 0,
  name: '',
  url: '#'
};

export default MeetupDate;