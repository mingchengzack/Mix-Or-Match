import React, { useContext } from "react";
import Card from "./Card";
import { GameContext } from "./GameContext";

const CardList = () => {
  const {
    cards,
    setCards,
    flips,
    setFlips,
    currentFlipped,
    setCurrentFlipped,
    flipMusic
  } = useContext(GameContext);

  const handleClick = id => {
    if (cards[id].isVisible || currentFlipped.length === 2) return;
    flipMusic.play();
    setFlips(flips + 1);
    setCards(prevCards => {
      prevCards[id].isVisible = true;
      return [...prevCards];
    });
    setCurrentFlipped(flippedCards => {
      return [...flippedCards, cards[id]];
    });
  };

  return (
    <React.Fragment>
      {cards.map(card => {
        return (
          <Card
            cardVal={card.val}
            isVisible={card.isVisible}
            isMatched={card.isMatched}
            handleClick={() => handleClick(card.id)}
            key={card.id}
          />
        );
      })}
    </React.Fragment>
  );
};

export default CardList;
