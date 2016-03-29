import React from 'react';
import { Link } from 'react-router';



class BlogList extends React.Component {

  static contextTypes = {
    container: React.PropTypes.array
  }

  render() {
    const list = this.context.container.map(item => {
      return (
          <li key={item.index}>
            <div className="blog-post-list">
              <Link className="blog-link" to={ "/Blog/" + item.fileName }>{item.title}</Link>
              <p className="blog-date">Published on: {item.date}</p>
              <div className="blog-leadline" dangerouslySetInnerHTML={{__html: item.leadLine}} />
            </div>
          </li>
      );
    }).reverse()
    return (
      <div className="body-content-wrapper">
        <div className="body-content">
          <section className="standard blog">
            <h1>List of blog posts!</h1>
            <ul className="blog-list">
              {list}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default BlogList;