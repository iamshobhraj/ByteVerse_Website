import Image from "next/image";
import React from "react";
import PrizeCard from "./PrizeCard";
import AddtionalCard from "./AddtionalCard";

const Prizes = () => {
  return (
    <div
      className="relative h-fit pt-28"
      style={{
        background: "linear-gradient(180deg,#000000 ,#1f0000 30%,#4a0000 100%)",
      }}
    >
      <div className=" inset-0 z-10 flex justify-center items-center">
        <div className="   flex flex-col justify-center items-center  z-10 lg:py-10  ">
          <Image
            src="/prizes/prize.webp"
            width={1100}
            height={380}
            draggable={false}
            className=""
            alt="Knife"
            style={{ scale: "80%" }}
          />

          <div>
            {/* Show this div on small screens */}
            <div className="pt-10 flex px-10 flex-wrap justify-center items-center md:gap-6 gap-10  lg:hidden ">
              <PrizeCard
                image="/prizes/Gold trophy.png"
                padding="20"
                title="First"
                prize="10000"
                details1="One-way system drivers, mock interviews with unlimited practice by Interview Buddy."
                details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
              />
              <PrizeCard
                image="/prizes/Silver trophy.png"
                padding="20"
                title="Second"
                prize="8000"
                details1="One-way system drivers, mock interviews with unlimited practice by Interview Buddy."
                details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
              />
              <PrizeCard
                image="/prizes/Bronze trophy.png"
                padding="20"
                title="Third"
                prize="6000"
                details1="One-way system drivers, mock interviews with unlimited practice by Interview Buddy."
                details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
              />
            </div>

            {/* Show this div on medium and large screens */}
            <div className="w-screen  h-screen   p-10   flex-col justify-center items-center  hidden  lg:flex lg:flex-row lg:justify-evenly lg:items-center ">
              <PrizeCard
                image="/prizes/Silver trophy.png"
                padding="20"
                title="Second"
                prize="8000"
                details1="One-way system drivers, mock interviews with unlimited practice by Interview Buddy."
                details2="One year of subscription to  Wolfram |One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
              />
              <div className="md:mb-32 md:mx-20">
                <PrizeCard
                  image="/prizes/Gold trophy.png"
                  padding="0"
                  title="First"
                  prize="10000"
                  details1="One-way system drivers, mock interviews with unlimited practice by Interview Buddy."
                  details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
                />
              </div>

              <PrizeCard
                image="/prizes/Bronze trophy.png"
                padding="20"
                title="Third"
                prize="6000"
                details1="One-way system drivers, mock interviews with unlimited practice by Interview Buddy."
                details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full relative insert-0 top-[-60rem]">
        <div className="z-0 absolute left-0 right-0 h-[26rem] top-[-54rem] md:top-[-26rem] lg:top-[-20rem] xl:top-[-32rem] bg-gradient-to-b from-[#4a000000] to-black"></div>
        <div className=" z-0 absolute top-[-68rem] md:top[-40rem] lg:top-[-48rem] flex justify-center lg:justify-start items-center">
          <Image
            src={"/prizes/ninja.webp"}
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
      </div>

      <div>
        {/* Show this div on small screens */}
        <div className=" pt-10 flex px-10 flex-wrap justify-center items-center md:gap-6 gap-10  lg:hidden ">
          <AddtionalCard
            image="/prizes/Frame 1438.png"
            padding="20"
            title="BEST ALL-GIRLS TEAM"
            prize="5000"
            details1="Free access to TeachNook courses worth INR. 5,000, to every member of the team."
            details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
          />
          <AddtionalCard
            image="/prizes/Frame 1583.png"
            padding="20"
            title="BEST 1ST YEAR TEAM"
            prize="3000"
            details1="Free access to TeachNook courses worth INR. 5,000, to every member of the team."
          />
          <AddtionalCard
            image="/prizes/Group 1443.png"
            padding="20"
            title="TOP 20 TEAMS"
            isTop20={true}
            details1="Free access to TeachNook courses worth INR. 5,000, to every member of the team."
          />
        </div>

        {/* Show this div on medium and large screens */}
        <div className="w-screen  h-screen   p-10   flex-col justify-center items-center  hidden  lg:flex lg:flex-row lg:justify-evenly lg:items-center ">
          <AddtionalCard
            image="/prizes/Frame 1438.png"
            padding="20"
            title="BEST ALL-GIRLS TEAM"
            prize="5000"
            details1="Free access to TeachNook courses worth INR. 5,000, to every member of the team."
            details2="One year of subscription to  Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro."
          />
          <AddtionalCard
            image="/prizes/Frame 1583.png"
            padding="20"
            title="BEST 1ST YEAR TEAM"
            prize="3000"
            details1="Free access to TeachNook courses worth INR. 5,000, to every member of the team."
          />
          <AddtionalCard
            image="/prizes/Group 1443.png"
            padding="20"
            title="TOP 20 TEAMS"
            isTop20={true}
            details1="Free access to TeachNook courses worth INR. 5,000, to every member of the team."
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
