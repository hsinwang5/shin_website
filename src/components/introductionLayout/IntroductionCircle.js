import React, { Component } from "react";
import classnames from "classnames";

class IntroductionCircle extends Component {
  /*
  2 props: aniRight and aniLeft. Pass aniRight for a left circle animating right,
  and vice versa.
  */
  constructor(props) {
    super(props);

    this.state = {
      top: this.props.top,
      topOffset: "22%",
      // animationDistance: 3000,
      sideOffset: 0
    };

    // this.onEnter = this.onEnter.bind(this);
    // this.onLeave = this.onLeave.bind(this);
  }

  componentWillMount() {
    let topOffset = window.innerWidth <= 850 ? "15%" : "14%";
    // let animationDistance = window.innerHeight <= 1100 ? 600 : 900;
    let sideOffset = window.innerWidth <= 850 ? "12vw" : "12vw";
    this.setState({
      topOffset,
      // animationDistance,
      sideOffset
    });
  }
  //returns the circles to introduction section
  // onEnter() {
  //   if (this.props.aniRight) {
  //     let left = this.state.sideOffset;
  //     let top = this.props.top;
  //     this.setState({
  //       left,
  //       top
  //     });
  //   }
  //   if (this.props.aniLeft) {
  //     let right = this.state.sideOffset;
  //     let top = this.props.top;
  //     this.setState({
  //       right,
  //       top
  //     });
  //   }
  // }
  // //animates circles down towards portfolio section
  // onLeave({ currentPosition }) {
  //   if (currentPosition === "below") {
  //     console.log("stopped");
  //     return;
  //   }
  //   if (this.props.aniRight) {
  //     let left = "-50vw";
  //     let top = this.state.animationDistance;
  //     this.setState({
  //       left,
  //       top
  //     });
  //   }
  //   if (this.props.aniLeft) {
  //     let right = "-50vw";
  //     let top = this.state.animationDistance;
  //     this.setState({
  //       right,
  //       top
  //     });
  //   }
  // }

  render() {
    // let horizontalAxis;

    const horizontalAxis = this.props.introScrolled
      ? "-100vw"
      : this.state.sideOffset;

    const Style = {
      top: `${this.state.top}%`,
      left: `${this.props.aniRight ? horizontalAxis : "none"}`,
      right: `${this.props.aniLeft ? horizontalAxis : "none"}`
    };
    const StyleAnchor = {
      top: `${this.props.top}%`,
      left: `${this.props.aniRight ? "-8vw" : "none"}`,
      right: `${this.props.aniLeft ? "-8vw" : "none"}`
    };
    const StyleWaypoint = {
      top: `${this.props.top + 100}%`,
      left: 0,
      right: 0
    };
    return (
      <div className="introduction__anchor" style={StyleAnchor}>
        <div
          className={classnames("introduction__circle", {
            "animation__introduction-circle1": this.props.aniLeft,
            "animation__introduction-circle2": this.props.aniRight
          })}
          style={Style}
        />
        <div className="introduction__waypoint" style={StyleWaypoint} />
      </div>
    );
  }
}

IntroductionCircle.defaultProps = {
  neonColorsArr: ["#d8f520", "#00dff7", "#fcad00", "#fc00d2", "#fc5b5b"]
};

export default IntroductionCircle;
