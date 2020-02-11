import React, { useContext } from "react";
import Title from "./Title";
import Info from "./Info";
import CardList from "./CardList";
import Overlay from "./Overlay";
import { CardProvider, CardContext } from "./CardContext";

const InfoContainer = () => {
  const { time, flips } = useContext(CardContext);
  return (
    <div className="game-info-container">
      <Info text="Time" val={time}></Info>
      <Info text="Flips" val={flips}></Info>
    </div>
  );
};

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

const GameContainer = () => {
  const randomCards = cardValues.slice();
  shuffle(randomCards);

  return (
    <div className="game-container">
      <CardProvider randomCards={randomCards}>
        <InfoContainer />
        <CardList />
      </CardProvider>
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
