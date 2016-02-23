import React from 'react';

const peopleTypes = [
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

const GetInvolved = () => (
  <section id="get-involved" className="container content-section">
    <h1>Get Involved</h1>

    <div className="row">
      <div className="container">
        <h1 className="sliding-thing">
          <span>Are you </span>
          <div id="pt-main" className="pt-perspective">
            {
              peopleTypes.map(type => (
                <div key={type} className="pt-page">{ type }</div>
              ))
            }
          </div>
        </h1>

        <p>Contact <a href="mailto:codefordenver@gmail.com">codefordenver@gmail.com</a> about how you can get involved</p>
        <p>Follow us on <a href="https://github.com/codefordenver">Github</a></p>
      </div>
    </div>
  </section>
);

export default GetInvolved;
