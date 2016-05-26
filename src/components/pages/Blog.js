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
  const content = posts[index];
  //const leadLine = content.match(/<p>.*<\/p>/)[0];
  const fileName = key.slice(2, key.length - 3);
  // const date = new Date(fileName.split('_')[0]);
  const date = fileName.split('_')[0];
  const titleStr = fileName.split('_')[1].split('-').join(' ');

  return {
    index: index,
    fileName: fileName,
    title: titleStr,
    date: date,
    content: content
    //leadLine: leadLine
  }
})

class Blog extends React.Component {
  
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

export default Blog;