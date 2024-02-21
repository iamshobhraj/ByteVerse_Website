"use client";

import "./PrizeCard.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const PrizeCard = ({ image, padding, title }) => {
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
        <div className="prize-description pt-2 text-[#D6AE7D]">
          <h3 className="text-center text-2xl"> {title} Prize</h3>
          <li>Description of the prize goes here.</li>
        </div>
        <button className="read-more-button rounded-xl " onClick={handleFlip}>
          Read More
        </button>
      </div>
      <div className="back">
        <div className="prize-details text-[#D6AE7D] ">
          <h3>First Prize Details</h3>
          <p>More detailed description of the prize...</p>
          <h3>First Prize Details</h3>
          <p>More detailed description of the prize...</p>
          <h3>First Prize Details</h3>
          <p>More detailed description of the prize...</p>
          <h3>First Prize Details</h3>
          <p>More detailed description of the prize...</p>
        </div>
        <button className="close-button rounded-xl " onClick={handleFlip}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PrizeCard;
