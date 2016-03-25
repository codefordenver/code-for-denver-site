import React from 'react';



class BlogList extends React.Component {

  static contextTypes = {
    container: React.PropTypes.array
  }

  render() {
    const list = this.context.container.map(item => {
      return (
          <li key={item.index}>
            <a href={ "/OurVoice/" + item.title }>{item.title}</a>
          </li>
      );
    })
    return (
      <div className="body-content-wrapper">
        <div className="body-content">
          <section className="standard blog-post">
            <h1>List of blog posts!</h1>
            <ul>
              {list}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default BlogList;