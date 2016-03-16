import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import MeetupDate from './MeetupDate';

class MeetupsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      meetups: []
    }
  }


  componentWillMount() {
    const url = "http://codeforamerica.org/api/organizations/Code-for-Denver/upcoming_events?per_page=50";
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var data = JSON.parse(xmlhttp.responseText);
        var meetupData = data.objects;
        _.forEach(meetupData, (value, key, collection) => {
          value.start_time = moment(value.start_time);
        });

        var meetupDataSorted = _.sortBy(meetupData, 'start_time');
        this.setState({meetups:meetupDataSorted, loading: false});
      }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

	render() {
		return (
      <MeetupDate meetup={this.state.meetups[0]} loading={this.state.loading} />
    )
	}
}

export default MeetupsContainer;