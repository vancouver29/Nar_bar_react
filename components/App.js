import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import "../style.css";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}
