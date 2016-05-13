import React from 'react';

export default class Video extends React.Component {
  render() {
    return (
      <div className="video-wrapper">
        <div className="vimeo-video">
            <iframe src="https://player.vimeo.com/video/126984194?color=ffffff&byline=0&portrait=0&badge=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
      </div>
    )
  }
}
