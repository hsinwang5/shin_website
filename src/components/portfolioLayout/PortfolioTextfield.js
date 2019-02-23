import React, { Component } from "react";
import classnames from "classnames";

class PortfolioTextfield extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Style = {
      paddingTop: `${this.props.margin}px`,
      top: this.props.top,
      width: this.props.width,
      left: "-25vw",
      height: this.props.height
    };
    return (
      <div className="portfolio-textbox" style={Style}>
        <div
          className={classnames("portfolio-textbox__text", {
            "animation__portfolio-textbox": this.props.clicked,
            inactive: !this.props.clicked
          })}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default PortfolioTextfield;
