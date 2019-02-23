import React, { Component } from "react";
import Waypoint from "react-waypoint";

import Hero from "../pages/Hero";
import Introduction from "../pages/Introduction";
import Portfolio from "../pages/Portfolio";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overflow: "hidden",
      isClicked: false,
      width: "100vw",
      height: "100vh",
      introScrolled: false
    };

    this.allowScroll = this.allowScroll.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  onEnter() {
    this.setState({
      introScrolled: false
    });
  }

  onLeave() {
    this.setState({
      introScrolled: true
    });
  }

  allowScroll() {
    setTimeout(() => {
      this.setState({
        overflow: "scroll",
        width: "inherit",
        height: "inherit"
      });
    }, 3000);
    this.setState({
      isClicked: true
    });
  }

  render() {
    const Style = {
      overflow: this.state.overflow,
      width: this.state.width,
      height: this.state.height
    };
    return (
      <div className="main" style={Style}>
        <Hero allowScroll={this.allowScroll} />
        <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}>
          <div className="landing-waypoint" />
        </Waypoint>
        <Introduction
          isClicked={this.state.isClicked}
          introScrolled={this.state.introScrolled}
        />
        <Portfolio />
        <div className="test-screen" />
      </div>
    );
  }
}

export default Landing;
