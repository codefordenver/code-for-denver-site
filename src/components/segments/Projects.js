import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MarkdownRenderer from '../MarkdownRenderer';

const ProjectsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project-carousel-wrapper">
      <Slider {...settings}>
        <img alt="Feed" src="static/img/screenshot-feed.png" />
        <img alt="Fresh Food Connect" src="static/img/screenshot-freshfoodconnect.png" />
        <img alt="Denver Energy Efficiency" src="static/img/screenshot-denverenergyefficiency.png" />
        <img alt="SOL" src="static/img/screenshot-sol.png" />
        <img alt="RMMFI" src="static/img/screenshot-rmmfi.png" />
      </Slider>
    </div>
  );
};

const Projects = () => (
  <section className="standard projects">
    <h1 id="projects">Projects</h1>
    <ProjectsCarousel />
    <MarkdownRenderer fileName="projects" />
  </section>
);

export default Projects;
