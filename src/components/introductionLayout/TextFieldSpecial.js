import React, { Component } from "react";
import classnames from "classnames";
import TextFieldPortfolio from "./TextFieldPortfolio";

class TextFieldSpecial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Style = {
      paddingTop: `${this.props.margin}px`
    };
    const Style2 = {
      transitionDelay: `${this.props.delay}s`
    };
    let text1 = this.props.introScrolled ? "" : "My ";
    let text2 = this.props.introScrolled ? "" : "focuses on:";
    return (
      <div className="introduction__text" style={Style}>
        <div
          className={classnames("introduction__char3", {
            //animation for initial load
            "introduction__char--transition2": this.props.isClicked,
            "introduction__char3--transition": this.props.introScrolled
          })}
          style={Style2}
        >
          {text1}
          <TextFieldPortfolio
            isClicked={this.props.isClicked}
            delay={2}
            margin={10}
            introScrolled={this.props.introScrolled}
          />{" "}
          {text2}
        </div>
      </div>
    );
  }
}

export default TextFieldSpecial;
