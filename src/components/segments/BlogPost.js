import React from 'react';

const BlogPost = (props) => {
  const title = props.params.title
  const post = require(`../../blog/${title}.md`)
  return (
    <div>
      {props.params.title}
      <div dangerouslySetInnerHTML={{__html: post}} />
    </div>
  )
}

export default BlogPost;