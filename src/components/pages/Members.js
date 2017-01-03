import React from 'react';

import Hero from '../segments/Hero';
import MarkdownRenderer from '../MarkdownRenderer';

const Members = () => (
  <main>
    <Hero background="cfd-5.jpg" title="Member Resources" />
    <div className="body-content-wrapper">
      <div className="body-content">
        <MarkdownRenderer fileName="member_resources" />

        <h2>Google Drive</h2>
        <div className="text-center">
          <iframe src="https://drive.google.com/embeddedfolderview?id=0B15HLk4_JV3nWjkyOGtFUmhKZDQ#list" width="100%" height="600" frameBorder="0" />
        </div>
      </div>
    </div>
  </main>
);

export default Members;
