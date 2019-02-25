import React, { Component } from "react";
import Waypoint from "react-waypoint";
import classNames from "classnames";

import PortfolioThumbnail from "./PortfolioThumbnail";
import PortfolioHeader from "./PortfolioHeader";
import IntroductionText from "../introductionLayout/IntroductionText";
import PortfolioTextfield from "./PortfolioTextfield";
import PortfolioScreen from "./PortfolioScreen";

class PortfolioLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 1,
      top: 0,
      width: 0,
      topOffset: "20%",
      leftCircle: false,
      rightCircle: false,
      reverseLeftCircle: false,
      reverseRightCircle: false,
      scrolled: false,
      thumbnailSwitch: false,
      clicked: false,
      defaultHeight: 0, //calculates constant height of thumbnail
      defaultWidth: 0, //calculates constant width of thumbnail
      isMobile: false,
      loadingDone: false //needed due to responsive values being calucated after load
    };

    this.myRef = React.createRef();
    this.calculateSize = this.calculateSize.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onClick = this.onClick.bind(this);
    this.closeClick = this.closeClick.bind(this);
    this.setResponsiveness = this.setResponsiveness.bind(this);
  }

  componentWillMount() {
    //smooths animation transitions as user scrolls depending on screen height
    let topOffset = window.innerHeight <= 700 ? "90%" : "90%";
    this.setState({
      topOffset
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.calculateSize();
    }, 2000);
    this.setResponsiveness();
  }

  //dynamically calculates the size of portfolio circles, call on render and window resize
  //done for pixel perfect rendering on wavy line
  calculateSize() {
    //borderSize is the size of the circle's border plus 1 pixel
    const borderSize = 7;
    let width = Math.round(window.innerWidth * 0.3 * 0.69);
    width = width > 225 ? 225 : width;
    this.setState(
      {
        width,
        defaultWidth: width
      },
      () => {
        const height = Math.round(this.myRef.current.offsetWidth * 2.115);
        this.setState(
          {
            height,
            defaultHeight: height
          },
          () => {
            //calculate the top offset, factoring in the size of the circle's border
            const top =
              this.state.height * this.props.place -
              this.props.place * borderSize;
            this.setState({
              top
            });
          }
        );
      }
    );
  }
  //Calculates landscape or portrait position on mount
  setResponsiveness() {
    const isMobile = window.innerWidth < window.innerHeight ? true : false;
    this.setState({
      isMobile
    });
  }
  onEnter({ previousPosition, currentPosition }) {
    if (previousPosition === "below") {
      if (this.props.direction === "left") {
        this.setState({
          leftCircle: true,
          reverseLeftCircle: false,
          scrolled: true,
          thumbnailSwitch: true
        });
      } else {
        this.setState({
          rightCircle: true,
          reverseRightCircle: false,
          scrolled: true,
          thumbnailSwitch: true
        });
      }
    }
    //removes animation class from thumbnails to allow further animations
    setTimeout(() => {
      this.setState({
        thumbnailSwitch: false
      });
    }, 500);
  }
  onLeave({ previousPosition, currentPosition }) {
    if (currentPosition === "below") {
      if (this.props.direction === "left") {
        this.setState({
          leftCircle: false,
          reverseLeftCircle: true,
          scrolled: false
        });
      } else {
        this.setState({
          rightCircle: false,
          reverseRightCircle: true,
          scrolled: false
        });
      }
    }
  }
  //transforms portfolioline into textbox when thumbnail is clicked
  onClick() {
    this.props.handleClick();
    this.setState({
      clicked: true,
      loadingDone: true
    });
    document.body.style.overflow = "hidden";
  }
  closeClick() {
    this.setState({
      clicked: false
    });
    document.body.style.overflow = "scroll";
  }

  render() {
    let Style;
    //calculate where to place the portfolio circle along vertical axis
    //Set direction of circle + other properties in portfolio page
    if (this.props.direction === "left" && !this.state.clicked) {
      Style = {
        top: this.state.top,
        borderTopLeftRadius: "1000px",
        borderBottomLeftRadius: "1000px",
        borderRight: "5px",
        height: `${this.state.height}px`,
        left: `-16%`,
        width: `${this.state.width}px`,
        transition: this.state.loadingDone ? `all 0.7s ease-out` : "0"
      };
    } else if (this.props.direction === "right" && !this.state.clicked) {
      Style = {
        top: this.state.top,
        borderTopRightRadius: "1000px",
        borderBottomRightRadius: "1000px",
        borderLeft: "5px",
        height: `${this.state.height}px`,
        right: `-16%`,
        width: `${this.state.width}px`,
        transition: this.state.loadingDone ? `all 0.7s ease-out` : "0"
      };
    } else if (this.state.clicked) {
      Style = {
        top: `${this.props.viewportTop + window.innerHeight * 0.45}px`,
        transition: "all .6s ease-out",
        height: `${window.innerHeight * 0.52}px`,
        width: this.state.isMobile ? `80vw` : `70vw`,
        left: `-25vw`,
        zIndex: `101`,
        background: `black`
      };
    }
    return (
      <div className="portfolio-container">
        <div
          className={classNames({
            "portfolio-line__circle": true,
            animation__portfolioLineSlideInLeft: this.state.leftCircle,
            animation__portfolioLineSlideInRight: this.state.rightCircle,
            animation__portfolioLineSlideInLeftReverse: this.state
              .reverseLeftCircle,
            animation__portfolioLineSlideInRightReverse: this.state
              .reverseRightCircle
          })}
          style={Style}
          ref={this.myRef}
        >
          <Waypoint
            onEnter={this.onEnter}
            onLeave={this.onLeave}
            topOffset={"10%"}
          >
            <div className="throwawayp" />
          </Waypoint>
          <PortfolioThumbnail
            picture={this.props.picture}
            direction={this.props.direction}
            scrolled={this.state.scrolled}
            thumbnailSwitch={this.state.thumbnailSwitch}
            handleClick={this.onClick}
            clicked={this.state.clicked}
            viewportTop={this.props.viewportTop}
            defaultHeight={this.state.defaultHeight}
            defaultWidth={this.state.defaultWidth}
            isMobile={this.state.isMobile}
          />
          <PortfolioHeader
            text={this.props.text}
            direction={this.props.direction}
            scrolled={this.state.scrolled}
            clicked={this.state.clicked}
          />
        </div>
        <PortfolioTextfield
          text={this.props.description}
          clicked={this.state.clicked}
          margin={10}
          delay={10}
          top={`${this.props.viewportTop + window.innerHeight * 0.45}px`}
          width={this.state.isMobile ? `80vw` : `70vw`}
          height={`${window.innerHeight * 0.52}px`}
        />
        <PortfolioScreen
          top={this.props.viewportTop}
          clicked={this.state.clicked}
          handleClick={this.closeClick}
        />
      </div>
    );
  }
}

export default PortfolioLine;
