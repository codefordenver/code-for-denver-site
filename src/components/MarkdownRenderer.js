import React from 'react';

const MarkdownRenderer = ({fileName}) => {
  const markdownFile = require(`../markdown/${fileName}.md`);
  return (
    <div className="markdown-renderer">
      <a className="markdown-edit" href={`https://github.com/codefordenver/code-for-denver-site/edit/master/src/markdown/${fileName}.md`}>
        suggest edit
      </a>
      
      <div dangerouslySetInnerHTML={{__html: markdownFile}} />
    </div>
  );
};

export default MarkdownRenderer;
