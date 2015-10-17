import React from 'react';

const MarkdownRenderer = ({fileName}) => {
  const markdownFile = require(`../markdown/${fileName}.md`);
  return (
    <div dangerouslySetInnerHTML={{__html: markdownFile}} />
  );
};

export default MarkdownRenderer;
