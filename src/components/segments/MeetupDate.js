import React from 'react';
import moment from 'moment';


class MeetupDate extends React.Component {

  static propTypes = {
    date: React.PropTypes.object.isRequired,
    rsvps: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  }

  static defaultProps = {
  date: moment.unix(0),
    rsvps: 0,
    name: '',
    url: '#'
  }

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
              <br />{this.props.date.format('h:mm A')}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MeetupDate;