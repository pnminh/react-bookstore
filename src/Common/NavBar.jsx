import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Main } from '../Main/Main';
import { About } from '../About/About';
export class NavBar extends Component {
  render() {
    return (
      <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="index#">
                  Bloccit
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      {/* <a className="nav-link" href="/">
                    Home
                  </a> */}
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="/about">
                    About Us
                  </a> */}
                      <Link className="nav-link" to="/about">
                        About Us
                      </Link>
                      <span className="sr-only">(current)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <hr />

            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
          </div>
        </Router>
    );
  }
}
