import React from "react";

function Triangle(props) {
  const style = {
    top: props.top,
    transform: `scale(${props.scale})`
  };
  const animationStyle = {
    top: props.top,
    animationDelay: props.delay,
    transform: `scale(${props.scale})`
  };
  return (
    <div className="triangle-box">
      <div className="intro__triangle" style={style} />
      {animationStyle.animationDelay ? (
        <div
          className="intro__triangle animation__grow-triangle"
          style={animationStyle}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Triangle;
