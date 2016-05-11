import React from 'react';

export default class Video extends React.Component {
  render() {
    return (
    	<div className="vimeo-video">
      		<iframe src="https://player.vimeo.com/video/126984194" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      	</div>
    )
  }
}
