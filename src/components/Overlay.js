import React from "react";

const Overlay = props => {
  const { text, isVisible, over } = props;
  const visibleClass = isVisible ? "visible" : "";

  if (!over)
    return <div className={`overlay-text ${visibleClass}`}>{text}</div>;
  else
    return (
      <div className={`overlay-text ${visibleClass}`}>
        {text}
        <span className="overlay-text-small">Click to Restart</span>
      </div>
    );
};

export default Overlay;
