"use client";

import Image from "next/image";
import React, { useState } from "react";
import PrizeCard from "./PrizeCard";
import "./PrizeCard.css";

const AddtionalCard = ({
  image,
  padding,
  title,
  prize,
  details1,
  details2,
  isTop20,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-full mx-auto relative my-10 z-10 ">
        <Image
          src={image}
          width={400}
          height={400}
          className="w-auto h-[20vw]  lg:h-[10vw] z-10"
          alt={"roll"}
        />
      </div>
      <div>
        <div
          className={`prize-card rounded-md   mt-${padding}    ${
            isFlipped ? "flipped" : ""
          } `}

          // style={{ order: order }}
        >
          <div className="front ">
            <div className=" relative -right-24 md:-right-28  -top-2 pt-2 ">
              <Image
                src={"/prizes/Star medal.png"}
                width={80}
                height={80}
                alt="Trophy"
              />
            </div>
            <div className="prize-description  text-[#D6AE7D] flex items-center justify-center flex-col px-3">
              <h3 className="text-center text-xl font-bold "> {title} </h3>
              {prize && (
                <p className="text-center text-xl font-bold">
                  INR <span className=" text-2xl font-extrabold ">{prize}</span>
                </p>
              )}
              <li> {details1} </li>
              <li>One month of FREE access to echo3D(Pro Tier), worth $99.</li>
            </div>
            <button
              className="read-more-button rounded-2xl mt-3 "
              onClick={handleFlip}
            >
              Read More
            </button>
          </div>
          <div className="back">
            <div className="prize-details text-[#D6AE7D] px-2  ">
              {details2 && <li> {details2} </li>}
              <li>
                .xyz domains worth $10 for members of the team which we will be
                free for a year.
              </li>
              <li>One-month free Verbwire Starter Subscription</li>
              {!isTop20 && <li>Swags Kit and Vouchers from Physics Wallah</li>}
            </div>
            <button
              className="close-button rounded-2xl pt-3 "
              onClick={handleFlip}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtionalCard;
// import Image from "next/image";
// import React from "react";
// import PrizeCard from "./PrizeCard";

// const AddtionalCard = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="w-max mx-auto relative my-10 z-10 ">
//         <Image
//           src="/prizes/Frame 1438.png"
//           width={400}
//           height={400}
//           className="w-auto h-[20vw]  lg:h-[10vw] z-10"
//           alt={"roll"}
//         />
//       </div>
//       <div>
//         <PrizeCard
//           image="/prizes/Silver trophy.png"
//           padding="20"
//           title="Second"
//           prize="8000"
//           details1="One-way system drivers, mock interviews with unlimited practice by Interview Buddy."
//           details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
//         />
//       </div>
//     </div>
//   );
// };

// export default AddtionalCard;
