import React from "react";
import classnames from "classnames";

function PortfolioThumbnail(props) {
  let Style;
  const top = props.isMobile
    ? window.innerHeight * 0.35
    : window.innerHeight * 0.4;
  if (props.direction === "left" && !props.clicked) {
    Style = {
      left: `60%`
    };
  } else if (props.direction === "right" && !props.clicked) {
    Style = {
      right: `230%`
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
      transform: props.isMobile ? `scale(1.35)` : `scale(1.28)`
    };
  }
  return (
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
}

export default PortfolioThumbnail;
