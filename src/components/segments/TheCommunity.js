import React from 'react';

const TheCommunity = () => (
  <section className="standard thecommunity">
    <h1>How we use Agile </h1>
    <p>Code For Denver utilizes many Agile practices and tools in our distributed development environment to help us deliver the most value, at the earliest possible time to our partners.  </p>
    <h3 id="roles">Roles</h3>
    <p>We sign up for the agile roles of Scrum Master and Product Owner for each project, and our Sprints last two weeks and end in demos. </p>
    <h3 id="meeting-management">Meeting management</h3>
    <p>We complete a stand-up each week, and share what was done last week, what will be done in the coming week and surface any blockers. We also use the Pomodoro time management technique to focus our work during project nights.</p>
    <h3 id="tools">Tools</h3>
    <p>We utilize Github as our code repository with a kanban board inside the application “Waffle” that sits on top of the repo.  Within the waffleboard, we plan our project tasks using the familiar “backlog”, “ready”, “in progress” and “done” states for each task.  </p>
    <p>Our current workflow includes:</p>
    <ul>
       <li>General/team communication and chat: <a href="http://www.flowdoc.com">Flowdock</a></li>
       <li>Version Control: <a href="http://git-scm.com/">Git</a>/<a href="https://github.com/codefordenver">Github</a></li>
       <li>Story management: <a href="https://waffle.io/">Waffle.io</a></li>
       <li>Documentation/Technical writing: <a href="https://drive.google.com/folderview?id=0B15HLk4_JV3nWjkyOGtFUmhKZDQ&amp;usp=sharing_eid">Google Docs</a></li>
    </ul>
    <p>Don’t worry if you’re unfamiliar with any of these tools. Well help you get up and running.</p>
  </section>

);

export default TheCommunity;
