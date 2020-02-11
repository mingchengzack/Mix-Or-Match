import React, { useContext, useCallback } from "react";
import Card from "./Card";
import { CardContext } from "./CardContext";

const CardList = () => {
  const { cards, setCards, flips, setFlips } = useContext(CardContext);

  const handleClick = useCallback(
    id => {
      if (cards[id].isVisible) return;
      setFlips(flips + 1);
      setCards(prevCards => {
        prevCards[id].isVisible = true;
        return [...prevCards];
      });
    },
    [cards, flips, setFlips, setCards]
  );

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
