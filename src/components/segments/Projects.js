'use strict';

import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer';
import ReactDom from 'react-dom';
import Carousel from 'nuka-carousel';

class Projects extends React.Component {

  render() {
    return (

      <section className="standard projects">
        <DemoCarousel/>
        <MarkdownRenderer fileName="projects" />
      </section>

    );
  }
}

class DemoCarousel extends React.Component {

  mixins: [Carousel.ControllerMixin]

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  render() {
    return (

      <div style={{width: '50%', margin: 'auto'}}>
        <Carousel
          ref="carousel"
          data={this.setCarouselData}
          slideIndex={this.state.slideIndex}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <img src="static/img/cfd-1.jpg"/>
          <img src="static/img/cfd-2.jpg"/>
          <img src="static/img/cfd-3.jpg"/>
          <img src="static/img/cfd-4.jpg"/>
          <img src="static/img/cfd-5.jpg"/>
          <img src="static/img/cfd-6.jpg"/>
        </Carousel>
      </div>

    )
  }
}


// Don't forget to include the css in your page
// <link rel="stylesheet" href="style.css"/>

export default Projects;