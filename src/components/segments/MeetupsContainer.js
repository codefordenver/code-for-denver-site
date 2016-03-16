import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import MeetupDate from './MeetupDate';

class MeetupsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      meetupProps: {}
    }
  }


  componentWillMount() {
    const url = "https://codeforamerica.org/api/organizations/Code-for-Denver";
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        const data = JSON.parse(xmlhttp.responseText);
        const meetup = data.current_events[0]
        const meetupProps = {
          date: moment(meetup.start_time),
          rsvps: meetup.rsvps,
          name: meetup.name,
          url: meetup.event_url
        }

        this.setState({meetupProps: meetupProps});
      }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

	render() {
		return (
      <MeetupDate {...this.state.meetupProps} />
    ) 
	}
}

export default MeetupsContainer;