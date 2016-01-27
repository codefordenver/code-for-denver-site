import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Header from './components/Header';
import About from './components/home/About';


const Home = () => (
<div>

  <main>

    <section className="standard primary">
      <h1>Who We Are</h1>
      <p><a href="#">Code for Denver</a> is an dedicated, cooperative and diverse group of volunteers
        dedicated to the creation of civic technology aimed squarely at solving
        the problems of the world around us.</p>
      <p>We are technologists, programmers, visual and graphic designers,
        product managers, community organizers, students, researchers, developers,
        ux’ers and geeks. We are mothers and brothers and sisters and citizens.
        <strong>We may not all be coders, but we are all working for a better Denver,
        a better America, and a better tomorrow.</strong></p>
      <p><a href="#">Learn more about what we do, and how and why we do it!</a></p>
    </section>

    <section className="standard getconnected">
      <div className="flexgrid-row">
        <div className="getconnected-links">
          <h1>Get Connected!</h1>
          <p>We work in groups, together and we work online.
            Get connected, get involved  and lend us your passion,
            your voice and your skills.</p>
          <p>
            <a className="social-link" href="#"><i className="fa fa-facebook-official"></i></a>
            <a className="social-link" href="#"><i className="fa fa-twitter-square"></i></a>
            <a className="social-link" href="#"><i className="fa fa-pinterest-square"></i></a>
            <a className="social-link" href="#"><i className="fa fa-github-square"></i></a>
            <a className="social-link" href="#"><i className="fa fa-google-plus-square"></i></a>
            <a className="social-link" href="#"><i className="fa fa-youtube-square"></i></a>
          </p>
        </div>
        <div className="getconnected-twitter">
          <div className="twitter-widget">

          </div>
        </div>
      </div>

    </section>

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
  </main>

  <footer>
    <section className="standard sponsors">
      <div className="flexgrid-row">
        <div className="sponsors-sponsor">
          <div className="sponsor-img">
            <img src="static/img/sponsor-placeholder.png" />
          </div>
        </div>

        <div className="sponsors-codefordenver">
          <p><img src="static/img/logo-notext-red.png" /></p>
          <p>Code For Denver is generously supported by:</p>
        </div>

        <div className="sponsors-sponsor">
          <div className="sponsor-img">
            <img src="static/img/sponsor-placeholder.png" />
          </div>
        </div>
      </div>
    </section>

    <nav className="footer-nav">
      <div className="flexgrid-row">

      <div className="footer-nav-col">
        <ul>
          <li>Home</li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>About CfD</li>
          <li><a href="#">Who We Are</a></li>
          <li><a href="#">When &amp; Where</a></li>
          <li><a href="#">What We’re Doing</a></li>
          <li><a href="#">Our Stories</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>We need your help!</li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#">Member Skills</a></li>
          <li><a href="#">MeetUp.com</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Can We Help You?</li>
          <li><a href="#">Pitch your project!</a></li>
          <li><a href="#">Our pitch guidelines</a></li>
        </ul>


        <ul>
          <li>Our Partners</li>
          <li><a href="#">Our projects portfolio</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Our Supporters</li>
          <li><a href="#">Become a Supporter</a></li>
          <li><a href="#">Donate to Code for Denver</a></li>
          <li><a href="#">Tell a Friend about CfD</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <ul>
          <li>Social</li>
          <li><a href="#"><i className="fa fa-facebook-official"></i> Facebook</a></li>
          <li><a href="#"><i className="fa fa-twitter-square"></i> Twitter</a></li>
          <li><a href="#"><i className="fa fa-youtube-square"></i> YouTube</a></li>
          <li><a href="#"><i className="fa fa-github-square"></i> GitHub</a></li>
        </ul>
      </div>
</div>
    </nav>

  </footer>




  </div>
);

const OtherPage = () => (
  <section className="standard">
    <h1>Other Content</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
  </section>
);

const App = ({ children }) => (
  <div>
    <Header />

    { children }
  </div>
);

const notFound = () => (
  <div>
    <h1>Not Found :(</h1>
  </div>
);

const history = createHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="other" component={OtherPage}/>
      <Route path="*" component={notFound} />
    </Route>
  </Router>
), document.getElementById('site'));
