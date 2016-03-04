import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer';
import ReactDom from 'react-dom';
import Carousel from 'nuka-carousel';

class ProjectsCarousel extends React.Component {
  render() {
    return (
      <div className="project-carousel-wrapper">
        <Carousel
          data={this.setCarouselData}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <img src="static/img/screenshot-feed.png"/>
          <img src="static/img/screenshot-freshfoodconnect.png"/>
          <img src="static/img/screenshot-denverenergyefficiency.png"/>
          <img src="static/img/screenshot-sol.png"/>
          <img src="static/img/screenshot-rmmfi.png"/>
        </Carousel>
      </div>
    )
  }
}

class Projects extends React.Component {

  render() {
    return (

      <section className="standard projects">
        <h1 id="projects">Projects</h1>
        <ProjectsCarousel/>
        <MarkdownRenderer fileName="projects" />
      </section>

    );
  }
}

export default Projects;
