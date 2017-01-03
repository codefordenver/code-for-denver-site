import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class GetInvolved extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      peopleTypesIndex: 0,
    };
    this.changePeopleTypeIndex = this.changePeopleTypeIndex.bind(this);
  }

  peopleTypes = [
    'an Artist?',
    'a Writer?',
    'a Designer?',
    'a Community Organizer?',
    'a Developer?',
    'a Graphic Designer?',
    'a Facilitator?',
    'a Project Manager?',
    'a Government Representative?',
    'a Student?',
    'an Ally?',
    'Curious about Code For Denver?',
  ];

  // Change state, causing a call to render() method
  changePeopleTypeIndex() {
    if (this.state.peopleTypesIndex < this.peopleTypes.length - 1) {
      this.setState({
        peopleTypesIndex: this.state.peopleTypesIndex + 1,
      });
    } else {
      this.setState({ peopleTypesIndex: 0 });
    }
  }

  // Once component mounts, initiate a timer.
  componentDidMount() {
    this.updateTimer = setInterval(this.changePeopleTypeIndex, 2000);
  }
  // When unmounts, clean up the timer.
  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }


  render() {
    return (
      <section id="get-involved" className="container content-section">
        <h1>Get Involved</h1>

        <div className="row">
          <div className="container">
            <h1 className="sliding-thing">
              <span>Are you </span>
              <div id="pt-main" className="pt-perspective">
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={1}>
                  <span key={this.state.peopleTypesIndex}>
                    { this.peopleTypes[this.state.peopleTypesIndex] }
                  </span>
                </ReactCSSTransitionGroup>
              </div>
            </h1>

            <p>Contact <a href="mailto:codefordenver@gmail.com">codefordenver@gmail.com</a> about how you can get involved</p>
            <p>Follow us on <a href="https://github.com/codefordenver">Github</a></p>
          </div>
        </div>
      </section>
    );
  }
}
