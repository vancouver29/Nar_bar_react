import React, { Component } from "react";

export default class Contact extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "blue";
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>If you need contact us here is our email: info@example.de</p>
      </div>
    );
  }
}
