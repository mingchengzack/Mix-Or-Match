import React, { useState } from "react";
import Cobweb from "../Assets/Images/Cobweb.png";
import CobwebGrey from "../Assets/Images/CobwebGrey.png";
import Spider from "../Assets/Images/Spider.png";
import Bat from "../Assets/Images/Bat.png";
import Bones from "../Assets/Images/Bones.png";
import Cauldron from "../Assets/Images/Cauldron.png";
import Dracula from "../Assets/Images/Dracula.png";
import Eye from "../Assets/Images/Eye.png";
import Ghost from "../Assets/Images/Ghost.png";
import Pumpkin from "../Assets/Images/Pumpkin.png";
import Skull from "../Assets/Images/Skull.png";

const getCard = cardVal => {
  switch (cardVal) {
    case "Bat":
      return Bat;
    case "Bones":
      return Bones;
    case "Cauldron":
      return Cauldron;
    case "Dracula":
      return Dracula;
    case "Eye":
      return Eye;
    case "Ghost":
      return Ghost;
    case "Pumpkin":
      return Pumpkin;
    case "Skull":
      return Skull;
  }
};

const Card = props => {
  const { cardVal } = props;
  const card = getCard(cardVal);
  const [isVisible, setVisible] = useState(false);

  const visibleClass = isVisible ? "visible" : "";

  return (
    <div
      className={`card ${visibleClass}`}
      onClick={() => setVisible(!isVisible)}
    >
      <div className="card-back card-face">
        <img className="cob-web cob-web-top-left" src={Cobweb} />
        <img className="cob-web cob-web-top-right" src={Cobweb} />
        <img className="cob-web cob-web-bottom-left" src={Cobweb} />
        <img className="cob-web cob-web-bottom-right" src={Cobweb} />
        <img className="spider" src={Spider} />
      </div>
      <div className="card-front card-face">
        <img className="cob-web cob-web-top-left" src={CobwebGrey} />
        <img className="cob-web cob-web-top-right" src={CobwebGrey} />
        <img className="cob-web cob-web-bottom-left" src={CobwebGrey} />
        <img className="cob-web cob-web-bottom-right" src={CobwebGrey} />
        <img className="card-value" src={card} />
      </div>
    </div>
  );
};

export default Card;
