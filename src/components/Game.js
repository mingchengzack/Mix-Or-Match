import React from "react";
import Title from "./Title";
import Info from "./Info";
import Card from "./Card";

const InfoContainer = () => {
  return (
    <div className="game-info-container">
      <Info text="Time" val={100}></Info>
      <Info text="Flips" val={0}></Info>
    </div>
  );
};

const GameContainer = () => {
  // intialize cards
  const numCards = 16;
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(i);
  }

  return (
    <div className="game-container">
      <InfoContainer />
      {cards.map(i => {
        return <Card key={i}></Card>;
      })}
    </div>
  );
};

const Game = () => {
  return (
    <div>
      <Title />
      <GameContainer />
    </div>
  );
};

export default Game;
