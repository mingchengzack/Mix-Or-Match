import React, { useState, createContext } from "react";

export const CardContext = createContext();

export const CardProvider = props => {
  const randomCards = props.randomCards;

  const [cards, setCards] = useState([
    {
      id: 0,
      val: randomCards[0],
      isVisible: false,
      isMatched: false
    },
    {
      id: 1,
      val: randomCards[1],
      isVisible: false,
      isMatched: false
    },
    {
      id: 2,
      val: randomCards[2],
      isVisible: false,
      isMatched: false
    },
    {
      id: 3,
      val: randomCards[3],
      isVisible: false,
      isMatched: false
    },
    {
      id: 4,
      vall: randomCards[4],
      isVisible: false,
      isMatched: false
    },
    {
      id: 5,
      val: randomCards[5],
      isVisible: false,
      isMatched: false
    },
    {
      id: 6,
      val: randomCards[6],
      isVisible: false,
      isMatched: false
    },
    {
      id: 7,
      val: randomCards[7],
      isVisible: false,
      isMatched: false
    },
    {
      id: 8,
      val: randomCards[8],
      isVisible: false,
      isMatched: false
    },
    {
      id: 9,
      val: randomCards[9],
      isVisible: false,
      isMatched: false
    },
    {
      id: 10,
      val: randomCards[10],
      isVisible: false,
      isMatched: false
    },
    {
      id: 11,
      val: randomCards[11],
      isVisible: false,
      isMatched: false
    },
    {
      id: 12,
      val: randomCards[12],
      isVisible: false,
      isMatched: false
    },
    {
      id: 13,
      val: randomCards[13],
      isVisible: false,
      isMatched: false
    },
    {
      id: 14,
      val: randomCards[14],
      isVisible: false,
      isMatched: false
    },
    {
      id: 15,
      val: randomCards[15],
      isVisible: false,
      isMatched: false
    }
  ]);

  const [time, setTime] = useState(100);
  const [flips, setFlips] = useState(0);

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        time,
        setTime,
        flips,
        setFlips
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};
