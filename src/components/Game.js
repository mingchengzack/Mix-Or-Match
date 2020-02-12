import React, { useContext } from "react";
import Title from "./Title";
import Info from "./Info";
import CardList from "./CardList";
import Overlay from "./Overlay";
import { GameProvider, GameContext } from "./GameContext";

const InfoContainer = () => {
  const { time, flips } = useContext(GameContext);

  return (
    <div className="game-info-container">
      <Info text="Time" val={time}></Info>
      <Info text="Flips" val={flips}></Info>
    </div>
  );
};

const GameContainer = () => {
  return (
    <div className="game-container">
      <InfoContainer />
      <CardList />
    </div>
  );
};

const Game = () => {
  return (
    <div>
      <GameProvider>
        <Title />
        <Overlay text="Click to Start" />
        <Overlay text="GAME OVER!" />
        <Overlay text="VICTORY!" />
        <GameContainer />
      </GameProvider>
    </div>
  );
};

export default Game;
