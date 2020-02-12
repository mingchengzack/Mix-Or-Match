import React, { useState, useEffect, createContext, useRef } from "react";

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

export const GameContext = createContext();

export const GameProvider = props => {
  const randomCards = cardValues.slice();
  shuffle(randomCards);

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
  const [remaining, setRemaining] = useState(8);
  const [time, setTime] = useState(100);
  const [flips, setFlips] = useState(0);
  const [currentFlipped, setCurrentFlipped] = useState([]);
  const [game, startGame] = useState(false);
  const [over, gameOver] = useState(false);
  const [win, setWin] = useState(false);

  let stopTime = useRef(false);

  // Restart Game
  const RestartGame = () => {
    let newCards = cards.map((card, i) => {
      return { id: i, val: card.val, isVisible: false, isMatched: false };
    });
    setCards(newCards);
    setTime(100);
    setRemaining(8);
    setCurrentFlipped([]);
    setFlips(0);
    gameOver(false);
    setWin(false);
    stopTime.current = false;

    setTimeout(() => {
      const randomCards = cardValues.slice();
      shuffle(randomCards);
      newCards = randomCards.map((card, i) => {
        return { id: i, val: card, isVisible: false, isMatched: false };
      });
      setCards(newCards);
    }, 300);
  };

  // Handle game start/over and timer side effects
  useEffect(() => {
    if (game) {
      setTimeout(() => {
        if (time === 0) {
          gameOver(true);
        } else {
          if (!stopTime.current) setTime(time - 1);
        }
      }, 1000);
    }
  }, [game, time, stopTime]);

  // Handle matched/non-matched cards side effects
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
          setRemaining(prev => prev - 1);
        }, 100);
      }
      setTimeout(() => {
        setCurrentFlipped([]);
      }, 600);
    }
  }, [currentFlipped]);

  // Handle win condition side effect
  useEffect(() => {
    if (remaining === 0) {
      stopTime.current = true;
      setTimeout(() => {
        gameOver(true);
        setWin(true);
      }, 500);
    }
  }, [remaining]);

  return (
    <GameContext.Provider
      value={{
        cards,
        setCards,
        time,
        setTime,
        flips,
        setFlips,
        currentFlipped,
        setCurrentFlipped,
        game,
        startGame,
        win,
        setWin,
        over,
        gameOver,
        RestartGame
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
