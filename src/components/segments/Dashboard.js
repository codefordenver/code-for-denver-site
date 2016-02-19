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
      <div className="dashboard-item sparktime">
        <img src="static/img/dashboard-sparktime.png" />

          <div className="flexgrid-column sparktime-content">
            <div className="flexgrid-row">
              <div className="sparktime-stats">
                <h1>0y, 50w, 27h, 33m, 31s</h1>
              </div>
              <div className="sparktime-trackedtime">
                <p>tracked volunteer time</p>
              </div>
            </div>
            <div className="sparktime-checkin">
              <p>To check in, text &quot;In with Code for Denver&quot; to 929-BIG-HELP (244-4357)</p>
            </div>
          </div>

      </div>
    </div>
  </section>
);

export default Dashboard;
