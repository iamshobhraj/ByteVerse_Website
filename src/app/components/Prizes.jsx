import Image from "next/image";
import React from "react";
import PrizeCard from "./PrizeCard";

const Prizes = () => {
  return (
    <div
      className="relative h-fit pt-24"
      style={{
        background: "linear-gradient(180deg,#000000 ,#1f0000 30%,#4a0000 100%)",
      }}
    >
      <div className=" inset-0 z-10 flex justify-center items-center">
        <div className="   flex flex-col justify-center items-center z-10 lg:py-10  ">
          <Image
            src="/prizes/prize.png"
            width={1100}
            height={380}
            draggable={false}
            className=""
            alt="Knife"
            style={{ scale: "80%" }}
          />

          <div>
            {/* Show this div on small screens */}
            <div className=" pt-10 flex md:flex-col flex-wrap justify-center items-center md:gap-6 gap-10  lg:hidden px-0">
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
              <div className="md:mb-32 md:mx-20">
                <PrizeCard
                  image="/prizes/Gold trophy.png"
                  padding="0"
                  title="First"
                />
              </div>

              <PrizeCard
                image="/prizes/Bronze trophy.png"
                padding="20"
                title="Third"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full relative insert-0 top-[-60rem]">
        <div className=" z-0 absolute top-[-52rem] flex justify-center lg:justify-start items-center">
          <Image
            src={"/prizes/ninja.png"}
            height={280}
            width={280}
            style={{}}
          />
        </div>
        <div className="  lg: absolute w-full z-0  top-[-67rem]">
          <div className="w-full h-full lg:flex justify-end hidden">
            <Image
              src={"/prizes/casttle.svg"}
              width={300}
              height={300}
              style={{}}
            />
          </div>
        </div>
        <div className="w-full h-56 bg-black absolute top-[-14rem]"></div>
      </div>
    </div>
  );
};

export default Prizes;
