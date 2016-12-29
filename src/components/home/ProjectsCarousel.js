import React, { PropTypes } from 'react';

function formatShorterUrl(url) {
  const [, shorterUrl] = url.split('//');
  return shorterUrl;
}

const CarouselSlide = ({ active, imgUrl, name, description, partner, partnerUrl, projectUrl, sourceLink }) => (
  <div className={`item ${active ? 'active' : ''}`}>
    <img src={imgUrl} alt={name} />
    <div className="carousel-custom-caption">
      <h3>{ name }</h3>
      <p>
        { description }
      </p>
      {partner && <span>
        Partnership with <a href={partnerUrl || ''}>{ partner }</a> |
      </span>}
      {projectUrl && <span>
        <a href={projectUrl}>{ formatShorterUrl(projectUrl) }</a> |
      </span>}
      {sourceLink && <a href={sourceLink}>Source</a>}
    </div>
  </div>
);

CarouselSlide.propTypes = {
  active: PropTypes.bool,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  partner: PropTypes.string,
  partnerUrl: PropTypes.string,
  projectUrl: PropTypes.string,
  sourceLink: PropTypes.string,
};

const ProjectsCarousel = ({ projects }) => (
  <div>
    <p>
      A few projects the brigade has worked on:
    </p>
    <div className="row">
      <div className="col-md-9 project-highlight">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-pause="hover">
          {/* Indicators */}
          <ol className="carousel-indicators">
            {
              projects.map((project, idx) => (
                <li key={idx} data-target="#carousel-example-generic" data-slide-to={idx} className={`${project.active ? 'active' : ''}`} />
              ))
            }
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            {
              projects.map((project, idx) => (
                <CarouselSlide key={idx} {...project} />
              ))
            }
          </div>

          {/* Controls */}
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="col-md-3 project-list">
        <ul className="projects">
          {
            projects.map((project, idx) => (
              <li key={idx} data-target="#carousel-example-generic" data-slide-to={idx} className={`${project.active ? 'active' : ''}`}>
                { project.name }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
);

ProjectsCarousel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      description: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      partner: PropTypes.string,
      partnerUrl: PropTypes.string,
      projectUrl: PropTypes.string,
      sourceLink: PropTypes.string,
    }),
  ).isRequired,
};

ProjectsCarousel.defaultProps = {
  projects: [],
};

export default ProjectsCarousel;
