"use client";
import React, { useState, useEffect, useRef } from "react";
import Images from "./archiveImage";
import "./App.css";
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp.jsx';

function CountUp(props) {
  const ref = useRef(null);
  const count = useScrollTriggeredCountUp(ref,  props.number); //  0 to  100 count-up

  return <p ref={ref} className="text-6xl md:text-3xl lg:text-5xl text-[#D1A878] font-bold my-0">{count}+</p>
  
};

const Archive = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-6 flex flex-col items-center justify-center w-full mx-0">
      <div className="m-2 flex flex-col md:flex-row p-2 justify-evenly md:gap-8 md:px-12 lg:px-40 sm:px-6 w-full">
        <div className="bg-[#541E1E66] md:w-1/3 sm:w-3/5 h-40 rounded-xl flex flex-col justify-center my-auto items-center md:items-start shadow-md shadow-[#ffe1683c] px-4 mt-3">
          <CountUp number={6} />
          <p className="sm:mt-1 md:mt-3 text-2xl md:text-xl lg:text-2xl font-semibold">
            Themes
          </p>
        </div>
        <div className="bg-[#541E1E66] sm:w-3/5 md:w-1/3 h-40 rounded-xl flex flex-col justify-center my-auto shadow-md items-center md:items-start shadow-[#ffe1683c] px-4 mt-3">
          <CountUp number={36} />
          <p className="text-2xl sm:mt-1 md:mt-3 md:text-xl lg:text-2xl font-semibold">
            Hours of Hacking
          </p>
        </div>
        <div className="bg-[#541E1E66] sm:w-3/5 md:w-1/3 h-40 rounded-xl flex flex-col justify-center my-auto shadow-md items-center md:items-start shadow-[#ffe1683c] px-4 mt-3">
        <CountUp number={600} />
          <p className="text-2xl sm:mt-1 md:text-xl md:mt-3 lg:text-2xl font-semibold">
            Participants
          </p>
        </div>
      </div>
      <div className="m-2 flex flex-col md:flex-row p-2 justify-evenly w-full gap-12 lg:pt-6 md:px-10 lg:px-36">
        <div className="md:w-5/12 bg-[#70363666] rounded-2xl px-3 py-4 text-sm md:px-5 md:py-6 lg:px-10 lg:py-8 lg:text-2xl shadow-lg shadow-[#8484843c] text-opacity-90 font-thin text-slate-100 h-52 md:h-64 lg:h-96 w-full mx-auto overflow-y-auto hide-scroll overflow-x-hidden flex flex-col justify-start items-center">
          <h2 className="font-bold md:text-base lg:text-xl xl:text-3xl p-2 text-center">
            Byteverse: Unleash your coding magic!
          </h2>
          <p className="text-center md:text-base xl:text-2xl lg:text-base">
            Calling all tech wizards, problem solvers, and creative minds!
            Byteverse, the annual hackathon by Hackslash NITP, returns for its
            sixth edition. This electrifying event is where innovation meets
            code and your creativity knows no bounds.
          </p>
        </div>
        <div className="w-full md:w-7/12 bg-[#70363666] shadow-lg shadow-[#8484843c] rounded-2xl h-40 md:h-64 lg:h-96">
          <img
            src={Images[currentImageIndex].src}
            alt={Images[currentImageIndex].alt}
            className="h-full w-full object-cover rounded-lg transition-opacity duration-1000"
          />
        </div>
      </div>
    </main>
  );
};

export default Archive;
