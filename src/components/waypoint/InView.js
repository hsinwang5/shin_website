import React, { Component } from "react";
import Waypoint from "react-waypoint";

class InView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(currentPosition) {
    console.log(currentPosition);
    setInterval(() => {
      console.log(window.pageYOffset);
    }, 1000);
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter} onLeave={this.onEnter} />
      </div>
    );
  }
}

export default InView;
