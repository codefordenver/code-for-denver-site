import React from 'react';

import MarkdownRenderer from '../MarkdownRenderer';

const About = () => (
  <section id="about" className="container content-section">
    <MarkdownRenderer fileName="about" />
  </section>
);

export default About;
