import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer';

const Projects = () => (

  <section className="standard projects">
    <MarkdownRenderer fileName="projects" />
  </section>
///
// https://www.npmjs.com/package/react-responsive-carousel
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="img/cfd-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="img/cfd-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="img/cfd-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="img/cfd4.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="img/cfd-5.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="img/cfd-6.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="style.css"/>
// Begin DemoSliderControls

///
);

export default Projects;