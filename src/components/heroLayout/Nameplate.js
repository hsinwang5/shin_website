import React from "react";
import classnames from "classnames";

function Nameplate(props) {
  //"intro__nameplate animation__growNameplate"
  if (props.isClicked) {
    console.log(props.isClicked);
  }
  return (
    <div
      className={classnames("intro__nameplate animation__growNameplate", {
        animation__dropNameplate: props.isClicked,
        inactive: props.introScrolled
      })}
      onClick={props.enterWebsiteClick}
    >
      <div className="intro__nameplate--first">Shen</div>
      <div className="intro__nameplate--last">Wang</div>
    </div>
  );
}

export default Nameplate;
