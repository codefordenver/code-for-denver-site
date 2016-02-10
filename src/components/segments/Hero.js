import React from 'react';

class Hero extends React.Component {
  render (){

    return (
      <section className="hero" style = {{background: 'url("../static/img/' + this.props.background + '") no-repeat center center', backgroundSize: 'cover'}} >
        {console.log(this.props)}
        <div className="intro">
          <h1>{this.props.title}</h1>
          {this.props.content}
        </div>
      </section>
    );

  }
}

export default Hero;
