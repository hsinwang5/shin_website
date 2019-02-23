import React from "react";
import classnames from "classnames";

export default function PortfolioHeader(props) {
  let text = props.text;
  let style;
  if (props.direction === "left") {
    style = {
      right: "120%"
    };
  } else {
    style = {
      left: "120%"
    };
  }
  return (
    <div
      className={classnames({
        "portfolio-line__header": true,
        "portfolio-line__header--opacity": props.scrolled,
        inactive: props.clicked
      })}
      style={style}
    >
      {text}
    </div>
  );
}
