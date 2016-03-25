import React from 'react';

const BlogPost = (props) => {
  const title = props.params.title
  const post = require(`../../blog/${title}.md`)
  return (
    
    <div className="body-content-wrapper">
      <div className="body-content">
        <section className="standard blog-post">
          <div dangerouslySetInnerHTML={{__html: post}} />
        </section>
      </div>
    </div>
  )
}

export default BlogPost;