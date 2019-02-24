import React, { Component } from "react";
import classnames from "classnames";

class PortfolioText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const strArray =
      typeof this.props.text === "string"
        ? this.props.text.split("")
        : "No string specified".split("");
    const spans = strArray.map((char, index) => (
      <span
        key={index}
        style={{
          transitionDelay: this.props.introScrolled
            ? "0s"
            : `${index * 0.03 + this.props.delay}s`
        }}
        className={classnames("introduction__char", {
          inactive: !this.props.clicked,
          "introduction__char--transition": this.props.clicked
        })}
      >
        {char}
      </span>
    ));
    const Style = {
      paddingTop: `${this.props.margin}px`
    };
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <div className="introduction__text" style={Style}>
          {spans}
        </div>
      </a>
    );
  }
}

export default PortfolioText;
