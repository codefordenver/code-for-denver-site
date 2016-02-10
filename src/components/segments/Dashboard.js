import React from 'react';

const Dashboard = () => (
  <section className="standard dashboard">
    <div className="flexgrid-column">
      <div className="dashboard-toprow">
        <div className="flexgrid-row">
          <div className="dashboard-item members">
            <img src = "static/img/dashboardtext-members.png" />
          </div>
          <div className="dashboard-item meetings">
            <img src="static/img/dashboardtext-meetings.png" />
          </div>
          <div className="dashboard-item projects">
            <img src="static/img/dashboardtext-projects.png" />
          </div>
          <div className="dashboard-item pizza">
            <img src="static/img/dashboardtext-pizza.png" />
          </div>
          <div className="dashboard-toprightcolumn">
            <div className="flexgrid-column">
              <div className="dashboard-item linesofcode">
                <img src="static/img/dashboardtext-linesofcode.png" />
              </div>
              <div className="dashboard-item infinite">
                <img src="static/img/dashboardtext-infinite.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-item sparktime"></div>
    </div>
  </section>
);

export default Dashboard;
