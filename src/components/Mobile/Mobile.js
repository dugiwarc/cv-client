import React, { Component } from "react";
import computer from "../../assets/icons/computer.svg";
import "./Mobile.scss";

export default class Mobile extends Component {
  render() {
    return (
      <div className="Mobile">
        <div className="title">Get the full experience in desktop mode</div>
        <div className="img">
          <img src={computer} alt="desktop" />
        </div>
      </div>
    );
  }
}
