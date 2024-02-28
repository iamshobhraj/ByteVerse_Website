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
        <div className="prize-description  text-[#D6AE7D] flex items-center flex-col px-3">
          <h3 className="text-center text-2xl font-bold"> {title} Prize</h3>
          <p className="text-center font-bold text-xl ">
            INR <span className=" text-2xl font-extrabold ">{prize}</span>
          </p>
          <li> {details1} </li>
        </div>
        <button className="read-more-button rounded-2xl  " onClick={handleFlip}>
          Read More
        </button>
      </div>
      <div className="back">
        <div className="prize-details text-[#D6AE7D] px-2  ">
          <li> {details2} </li>
          <li>
            .xyz domains worth $10 for members of the team which we will be free
            for a year.
          </li>
          <li>One month of FREE access to echo3D(Pro Tier), worth $99.</li>
          <li>Swags Kit and Vouchers from Physics Wallah</li>
        </div>
        <button className="close-button rounded-2xl " onClick={handleFlip}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PrizeCard;
