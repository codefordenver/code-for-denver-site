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
      <ul>
        {list}
      </ul>
    );
  }
}

export default BlogList;