import React, { useContext } from "react";
import { GameContext } from "./GameContext";

const Overlay = props => {
  const { game, startGame, win, over, RestartGame } = useContext(GameContext);
  const { text } = props;

  let isVisible;
  if (text === "Click to Start") {
    isVisible = !game;
  } else if (text === "GAME OVER!") {
    if (over) isVisible = !win;
    else isVisible = false;
  } else {
    if (over) isVisible = win;
    else isVisible = false;
  }

  const visibleClass = isVisible ? "visible" : "";

  if (!game)
    return (
      <div
        className={`overlay-text ${visibleClass}`}
        onClick={() => startGame(true)}
      >
        {text}
      </div>
    );
  else
    return (
      <div className={`overlay-text ${visibleClass}`}>
        {text}
        <span className="overlay-text-small" onClick={RestartGame}>
          Click to Restart
        </span>
      </div>
    );
};

export default Overlay;
