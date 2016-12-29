import React, { PropTypes } from 'react';

const MarkdownRenderer = ({ fileName }) => {
  const markdownFile = require(`../markdown/${fileName}.md`); // eslint-disable-line
  return (
    <div className="markdown-renderer">
      <a className="markdown-edit" href={`https://github.com/codefordenver/code-for-denver-site/edit/master/src/markdown/${fileName}.md`}>
        suggest edit
      </a>

      <div dangerouslySetInnerHTML={{ __html: markdownFile }} />
    </div>
  );
};

MarkdownRenderer.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default MarkdownRenderer;
