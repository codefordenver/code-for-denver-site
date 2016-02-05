import React from 'react';

import GetInvolved from './GetInvolved'
import MarkdownRenderer from '../MarkdownRenderer';

const Volunteer = () => (

<section id="about" className="standard primary">
  <GetInvolved />
  <MarkdownRenderer fileName="volunteer" />
</section>

);

export default Volunteer;
