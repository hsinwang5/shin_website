import React, { Component } from "react";

import Triangle from "../heroLayout/Triangle";
import Nameplate from "../heroLayout/Nameplate";
import EnterSubtext from "../heroLayout/EnterSubtext";
import Avatar from "../heroLayout/Avatar";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleTriangle1: 0,
      scaleTriangle2: 0,
      scrollHeroPage: 0
    };

    this.enterWebsite = this.enterWebsite.bind(this);
  }

  componentWillMount() {
    //timer for triangle 1 on hero page
    setTimeout(() => {
      this.setState({
        scaleTriangle1: 1
      });
    }, 500);
    //timer for triangle 2 on hero page
    setTimeout(() => {
      this.setState({
        scaleTriangle2: 1
      });
    }, 1500);
  }

  enterWebsite() {
    console.log("click success!");
    this.setState({
      scrollHeroPage: -110
    });
    //opens up scrolling once user enters website, sends up to Landing.js
    this.props.allowScroll();
  }

  render() {
    const style = {
      transform: `translateY(${this.state.scrollHeroPage}vh)`
    };
    return (
      <div className="hero-screen" style={style}>
        <div className="intro">
          <Triangle top="8%" delay=".5s" scale={this.state.scaleTriangle1} />
          <Triangle top="20%" delay="1.5s" scale={this.state.scaleTriangle2} />
          <Nameplate
            enterWebsiteClick={this.enterWebsite}
            top={this.state.scrollHeroPage}
          />
          <EnterSubtext />
          <Avatar />
        </div>
      </div>
    );
  }
}

export default Hero;
