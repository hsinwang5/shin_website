import React from "react";
import classnames from "classnames";

function PortfolioScreen(props) {
  const Style = {
    top: props.top
  };
  return (
    <div
      className={classnames({
        "portfolio-screen": true,
        inactive: !props.clicked
      })}
      style={Style}
      onClick={props.handleClick}
    >
      <div className="portfolio-screen__close">X</div>
    </div>
  );
}

export default PortfolioScreen;
