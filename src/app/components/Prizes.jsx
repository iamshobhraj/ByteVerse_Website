import Image from "next/image";
import React from "react";
import PrizeCard from "./PrizeCard";

const Prizes = () => {
  return (
    <div className="relative h-fit ">
      <div className=" inset-0 z-10 flex justify-center items-center">
        <div className="  p-10 flex flex-col justify-center items-center z-10 lg:p-20  ">
          <Image
            src="/prizes/prize.png"
            width={1100}
            height={380}
            draggable={false}
            className=""
            alt="Knife"
          />

          <div>
            {/* Show this div on small screens */}
            <div className="w-full pt-10 flex flex-col justify-center items-center gap-3 lg:hidden">
              <PrizeCard
                image="/prizes/Gold trophy.png"
                padding="20"
                title="First"
              />
              <PrizeCard
                image="/prizes/Silver trophy.png"
                padding="20"
                title="Second"
              />
              <PrizeCard
                image="/prizes/Bronze trophy.png"
                padding="20"
                title="Third"
              />
            </div>

            {/* Show this div on medium and large screens */}
            <div className="w-full h-screen  p-10  flex-col justify-center items-center gap-3 hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-16">
              <PrizeCard
                image="/prizes/Silver trophy.png"
                padding="20"
                title="Second"
              />
              <PrizeCard
                image="/prizes/Gold trophy.png"
                padding="0"
                title="First"
              />
              <PrizeCard
                image="/prizes/Bronze trophy.png"
                padding="20"
                title="Third"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0  flex justify-center lg:justify-start items-center">
        <Image
          src={"/prizes/ninja.png"}
          height={500}
          width={500}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
        />
      </div>
      <div className=" hidden lg: absolute inset-0 z-0 lg:flex justify-end items-center">
        <Image
          src={"/prizes/casttle.png"}
          width={400}
          height={400}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "fill" }}
        />
      </div>
    </div>
  );
};

export default Prizes;
