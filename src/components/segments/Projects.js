import React from 'react';
import Carousel from 'nuka-carousel';
import MarkdownRenderer from '../MarkdownRenderer';

class ProjectsCarousel extends React.Component {
  render() {
    return (
      <div className="project-carousel-wrapper">
        <Carousel
          data={this.setCarouselData}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}
        >
          <img src="static/img/screenshot-feed.png" />
          <img src="static/img/screenshot-freshfoodconnect.png" />
          <img src="static/img/screenshot-denverenergyefficiency.png" />
          <img src="static/img/screenshot-sol.png" />
          <img src="static/img/screenshot-rmmfi.png" />
        </Carousel>
      </div>
    );
  }
}

const Projects = () => (
  <section className="standard projects">
    <h1 id="projects">Projects</h1>
    <ProjectsCarousel />
    <MarkdownRenderer fileName="projects" />
  </section>
);

export default Projects;
