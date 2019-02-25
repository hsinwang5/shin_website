import React from "react";
import classnames from "classnames";

function PortfolioThumbnail(props) {
  let Style;
  const top = props.isMobile
    ? window.innerHeight * 0.35
    : window.innerHeight * 0.35;
  if (props.direction === "left" && !props.clicked) {
    Style = {
      left: `60%`,
      maxHeight: `${props.defaultHeight}px`,
      maxWidth: `${props.defaultWidth}px`
    };
  } else if (props.direction === "right" && !props.clicked) {
    Style = {
      right: `230%`, //right 230
      maxHeight: `${props.defaultHeight}px`,
      maxWidth: `${props.defaultWidth}px`
    };
  } else {
    Style = {
      // left: "0",
      // right: "80%",
      top: `-${top}px`,
      height: `${props.defaultHeight}px`,
      width: `${props.defaultWidth}px`,
      maxWidth: `450px`, //559
      maxHeight: `280px`, //350
      left: "0",
      right: "-50%",
      margin: "auto",
      transform: props.isMobile ? `scale(1.575)` : `scale(1.5)`,
      transition: `all .75s ease-out`
    };
  }
  const linkImage = props.clicked ? (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={`${props.picture}`} alt="portfolio project" />
    </a>
  ) : (
    <img src={`${props.picture}`} alt="portfolio project" />
  );
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
      {linkImage}
    </div>
  );
}

export default PortfolioThumbnail;
