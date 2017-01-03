import React, { PropTypes } from 'react';
import moment from 'moment';


class MeetupDate extends React.Component {

  static propTypes = {
    date: PropTypes.oneOfType([
      PropTypes.instanceOf(moment),
      PropTypes.instanceOf(Date),
    ]),
    rsvps: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  static defaultProps = {
    rsvps: 0,
    name: '',
    url: '#',
  }

  render() {
    if (!this.props.date) {
      return null;
    }

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
            <p>
              <a className="meetup-btn" href={this.props.url} target="_blank" rel="noopener noreferrer">
                Join {this.props.rsvps} others at our next event!
              </a>
            </p>
          </div>

        </div>

      </div>
    );
  }
}

export default MeetupDate;
