import React from "react";
import classnames from "classnames";

function PortfolioThumbnail(props) {
  let Style;
  //controls thumnail Y position. Higher values = higher position
  const top = props.isMobile
    ? window.innerHeight * 0.35
    : window.innerHeight * 0.35;
  if (props.direction === "left" && !props.clicked) {
    Style = {
      left: `60%`,
      height: `${props.defaultHeight}px`,
      width: `${props.defaultWidth}px`
    };
  } else if (props.direction === "right" && !props.clicked) {
    Style = {
      right: `230%`,
      height: `${props.defaultHeight}px`,
      width: `${props.defaultWidth}px`
    };
  } else {
    Style = {
      // left: "0",
      // right: "80%",
      top: `-${top}px`,
      height: `${props.defaultHeight * 0.8}px`,
      width: `${props.defaultWidth * 2.7}px`,
      maxWidth: `450px`, //559
      maxHeight: `280px`, //350
      left: "0",
      right: "0",
      margin: "auto",
      transform: props.isMobile ? `scale(1.5)` : `scale(1.4)`
    };
  }
  let Thumbnail = props.clicked ? (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div
        className={classnames({
          "portfolio-item": true,
          "animation__portfolio-item-left":
            props.scrolled &&
            props.direction === "left" &&
            props.thumbnailSwitch,
          "animation__portfolio-item-right":
            props.scrolled &&
            props.direction === "right" &&
            props.thumbnailSwitch
        })}
        style={Style}
        onClick={props.handleClick}
      >
        <img src={`${props.picture}`} alt="portfolio project" />
      </div>
    </a>
  ) : (
    <div
      className={classnames({
        "portfolio-item": true,
        "animation__portfolio-item-left":
          props.scrolled && props.direction === "left" && props.thumbnailSwitch,
        "animation__portfolio-item-right":
          props.scrolled && props.direction === "right" && props.thumbnailSwitch
      })}
      style={Style}
      onClick={props.handleClick}
    >
      <img src={`${props.picture}`} alt="portfolio project" />
    </div>
  );
  return Thumbnail;
}

export default PortfolioThumbnail;
