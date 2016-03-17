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
              <p className="date">{this.props.name}</p>
              <p className="date">
                {this.props.date.format('dddd, MMMM Do, YYYY, h:mm A')}
              </p>
              <p><a className="meetup-btn" href={this.props.url} target="_blank">
                Join {this.props.rsvps} others at our next event!</a></p>
            </div>

          </div>

      </div>
    )
  }
}

export default MeetupDate;
