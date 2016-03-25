import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';
import Dashboard from '../segments/Dashboard';

const HeroBackground='cfd-9.jpg';
const HeroTitle= 'Our voice hero.';
const HeroContent = 'Our voice hero content';


const postContext = require.context('../../blog', false, /\.md/);

function requireAll(context) {
  return context.keys().map(context);
}

const posts = requireAll(postContext);
const container = postContext.keys().map((key, index) => {
  return {
    index: index,
    title: key.slice(2, key.length - 3),
    content: posts[index]
  }
})

class OurVoice extends React.Component {
  
  constructor(props) {
    super(props),
    this.state = { container: container };
  }

  static childContextTypes = {
    container: React.PropTypes.array
  }

  getChildContext() {
    return {container: this.state.container};
  }

  render() {
    console.log(this.state.container);
    return (
      <div>
        <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
        {this.props.children}
        <Interested />
        <Dashboard/>
      </div>
    );
  }
}

export default OurVoice;