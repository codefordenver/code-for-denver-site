import React from 'react';

class Hero extends React.Component {
  render (){

    return (
      <section className="hero" style = {{background: 'url("../static/img/' + this.props.background + '") no-repeat center center', backgroundSize: 'cover'}} >
        {console.log(this.props)}
        <div className={ "intro " + this.props.page }>
          <h1>{this.props.title}</h1>
          <div>
            { this.props.children }
          </div>
          <p>{this.props.content}</p>
        </div>
      </section>
    );

  }
}

export default Hero;
