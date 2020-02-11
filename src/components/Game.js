import React from "react";
import Title from "./Title";
import Info from "./Info";
import Card from "./Card";
import Overlay from "./Overlay";

const cardValues = [
  "Bat",
  "Bones",
  "Cauldron",
  "Dracula",
  "Eye",
  "Ghost",
  "Pumpkin",
  "Skull",
  "Bat",
  "Bones",
  "Cauldron",
  "Dracula",
  "Eye",
  "Ghost",
  "Pumpkin",
  "Skull"
];

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const InfoContainer = () => {
  return (
    <div className="game-info-container">
      <Info text="Time" val={100}></Info>
      <Info text="Flips" val={0}></Info>
    </div>
  );
};

const GameContainer = () => {
  const cards = cardValues.slice();
  shuffle(cards);

  return (
    <div className="game-container">
      <InfoContainer />
      {cards.map((cardVal, i) => {
        return <Card cardVal={cardVal} key={i}></Card>;
      })}
    </div>
  );
};

const Game = () => {
  return (
    <div>
      <Title />
      <Overlay text="Click to Start" isVisible={false} over={false} />
      <Overlay text="GAME OVER!" isVisible={false} over={true} win={false} />
      <Overlay text="VICTORY!" isVisible={false} over={true} win={true} />
      <GameContainer />
    </div>
  );
};

export default Game;
