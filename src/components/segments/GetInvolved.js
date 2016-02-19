import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class GetInvolved extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      peopleTypesIndex: 0
    };
    this. changePeopleTypeIndex = this. changePeopleTypeIndex.bind(this);
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
    'Curious about Code For Denver?'
  ];

  // Change state, causing a call to render() method
  changePeopleTypeIndex() {
    if (this.state.peopleTypesIndex < this.peopleTypes.length - 1) {
      this.setState({
        peopleTypesIndex: this.state.peopleTypesIndex + 1
      })
    } else {
      this.setState({peopleTypesIndex: 0})
    }
  }

  // Once component mounts, initiate a timer.
  componentDidMount() {
    this.updateTimer = setInterval(this.changePeopleTypeIndex, 4000)
  }
  // When unmounts, clean up the timer.
  componentWillUnmount() {
    clearInterval(this.updateTimer)
  }


  render() {
    return (
      <section id="get-involved" className="container content-section">
        <div className="row">
          <div className="container">
            <h1>Get Involved</h1>
            <h1>Are you</h1>
            <h1 className="sliding-thing">
              <ReactCSSTransitionGroup transitionName="example" component="div" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                <span key={this.state.peopleTypesIndex}>
                  { this.peopleTypes[this.state.peopleTypesIndex] }
                </span>
              </ReactCSSTransitionGroup>
            </h1>
          </div>
        </div>
      </section>
    )
  }
}
