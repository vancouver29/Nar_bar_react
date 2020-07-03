import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "goldenrod";
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is a Demo App of Router </p>
      </div>
    );
  }
}
