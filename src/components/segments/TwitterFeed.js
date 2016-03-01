import React from 'react';
import Timeline from 'react-embedded-twitter-timeline';

export default class TwitterFeed extends React.Component {
  render() {
    return (
      <Timeline username="CodeForDenver" widgetId="691806964364505088">
      Tweets by @CodeForDenver
      </Timeline>
    )
  }
}
