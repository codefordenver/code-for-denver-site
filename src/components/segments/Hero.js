import React from 'react';

class Hero extends React.Component {
  static defaultProps = {
    position: 'center'
  };

  render() {
    const heroStyle = {
      background: 'url("../static/img/' + this.props.background + '") no-repeat center center',
      backgroundSize: 'cover',
      backgroundPosition: this.props.position
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
