"use client";

import "./PrizeCard.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const PrizeCard = ({ image, padding, title, prize, details1, details2 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`prize-card rounded-md   mt-${padding}    ${
        isFlipped ? "flipped" : ""
      } `}

      // style={{ order: order }}
    >
      <div className="front">
        <div className="half-circle"></div>
        <div className="prize-image pt-24">
          <Image src={image} width={150} height={150} alt="Trophy" />
        </div>
        <div className="prize-description pt-2 text-[#D6AE7D] flex items-center flex-col">
          <h3 className="text-center text-2xl"> {title} Prize</h3>
          <li className="text-center">INR {prize}</li>
        </div>
        <button className="read-more-button rounded-xl " onClick={handleFlip}>
          Read More
        </button>
      </div>
      <div className="back">
        <div className="prize-details text-[#D6AE7D] px-2 ">
          <h3>
            Cash Prize for {title} Prize: INR {prize}{" "}
          </h3>
          <p> {details1} </p>
          <p> {details2} </p>
          <p>Swags Kit and Vouchers from Physics Wallah</p>
        </div>
        <button className="close-button rounded-xl " onClick={handleFlip}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PrizeCard;
