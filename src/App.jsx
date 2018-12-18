import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { About } from './About/About';
import { Admin } from './Admin/Admin';
import BookList from './BookList/BookList';
import { History } from './History/History';
import { Main } from './Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="index#">
                  Book Store
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
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/books">
                        Books
                      </Link>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/history">
                        History
                      </Link>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin
                      </Link>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About Us
                      </Link>
                      <span className="sr-only">(current)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/books" component={BookList} />
            <Route path="/admin" component={Admin} />
            <Route path="/history" component={History} />
          </div>
        </Router>
        <script
          src="http://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossOrigin="anonymous"
        />

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
      </div>
    );
  }
}

export default App;
