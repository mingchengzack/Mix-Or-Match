import React, { useState, useEffect, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = props => {
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
      val: randomCards[4],
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
  const [time, setTime] = useState(5);
  const [flips, setFlips] = useState(0);
  const [currentFlipped, setCurrentFlipped] = useState([]);

  // let countdown;

  // const startCountdown = () => {
  //   return setInterval(() => {
  //     setTime(time - 1);
  //     if (time === 0) gameOver(countdown);
  //   }, 1000);
  // };

  // countdown = startCountdown();

  // const gameOver = () => {
  //   clearInterval(countdown);
  // };

  useEffect(() => {
    if (currentFlipped.length === 2) {
      const setMatched = () => {
        setCards(prevCards => {
          prevCards[currentFlipped[0].id].isMatched = true;
          prevCards[currentFlipped[1].id].isMatched = true;
          return [...prevCards];
        });
      };

      const resetCards = () => {
        setCards(prevCards => {
          prevCards[currentFlipped[0].id].isVisible = false;
          prevCards[currentFlipped[1].id].isVisible = false;
          return [...prevCards];
        });
      };

      if (currentFlipped[0].val !== currentFlipped[1].val) {
        setTimeout(() => {
          resetCards();
        }, 600);
      } else {
        setTimeout(() => {
          setMatched();
        }, 100);
      }
      setCurrentFlipped([]);
    }
  }, [currentFlipped]);

  return (
    <GameContext.Provider
      value={{
        cards,
        setCards,
        time,
        setTime,
        flips,
        setFlips,

        setCurrentFlipped
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
