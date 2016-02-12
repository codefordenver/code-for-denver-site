import React from 'react';

export default class TwitterFeed extends React.Component {
  // Because the page is dynamic, we need to check for widgets on the page when
  // this component finally mounts.
  componentDidMount() {
    twttr.widgets.load();
  }

  render() {
    return (
      <div className="twitter-widget">
        <a className="twitter-timeline" href="https://twitter.com/CodeForDenver" data-widget-id="691806964364505088">Tweets by @CodeForDenver</a>
      </div>
    )
  }
}