import React from "react";

const Info = props => {
  const { text, val } = props;
  return (
    <div className="game-info">
      {text} {val}
    </div>
  );
};

export default Info;
