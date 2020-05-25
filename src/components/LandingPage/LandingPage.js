import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import SocialBox from "../SocialBox/SocialBox";
import SidebarNavigator from "../SidebarNavigator/SidebarNavigator";
import "./LandingPage.scss";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <>
          <Profile />
          <SidebarNavigator />
          <Projects />
        </>
        <>
          <SocialBox />
        </>
      </div>
    );
  }
}
