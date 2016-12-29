import React, { PropTypes } from 'react';

class Hero extends React.Component {
  static defaultProps = {
    position: 'center',
  };

  static propTypes = {
    background: PropTypes.string.isRequired,
    content: PropTypes.string,
    position: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const heroStyle = {
      background: `url("../static/img/${this.props.background}") no-repeat center center`,
      backgroundSize: 'cover',
      backgroundPosition: this.props.position,
    };

    return (
      <section className="hero" style={heroStyle}>
        <div className="intro">
          <h1>{ this.props.title }</h1>
          <p>{ this.props.content }</p>
        </div>
      </section>
    );
  }
}

export default Hero;
