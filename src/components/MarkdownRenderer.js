import React from 'react';

const MarkdownRenderer = ({fileName}) => {
  const markdownFile = require(`../markdown/${fileName}.md`);
  return (
    <div className="markown-renderer">
      <div dangerouslySetInnerHTML={{__html: markdownFile}} />
      <a className="markdown-edit" href={`https://github.com/codefordenver/code-for-denver-site/edit/master/src/markdown/${fileName}.md`}>
        suggest edit
      </a>
    </div>
  );
};

export default MarkdownRenderer;
