import React from "react";
import Cobweb from "../Assets/Images/Cobweb.png";
import CobwebGrey from "../Assets/Images/CobwebGrey.png";
import Spider from "../Assets/Images/Spider.png";
import Bat from "../Assets/Images/Bat.png";
import Bones from "../Assets/Images/Bat.png";
import Dracula from "../Assets/Images/Bat.png";
import Eye from "../Assets/Images/Bat.png";
import Ghost from "../Assets/Images/Bat.png";
import Pumpkin from "../Assets/Images/Bat.png";
import Skull from "../Assets/Images/Skull.png";

const Card = props => {
  return (
    <div className="card visible">
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
        <img className="spider" src={Bat} />
      </div>
    </div>
  );
};

export default Card;
