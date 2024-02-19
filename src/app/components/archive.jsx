"use client";
import React, { useState, useEffect } from "react";
import Images from "./archiveImage";
import "./App.css";

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
    <main className="pt-6 flex flex-col w-full mx-0">
      <div className="m-2 flex flex-col md:flex-row p-2 justify-evenly md:gap-8 md:px-12 lg:px-40 sm:px-6">
        <div className="bg-[#541E1E66] md:w-1/3 sm:w-3/5 h-40 rounded-xl flex flex-col justify-center my-auto items-center md:items-start shadow-md shadow-[#ffe1683c] px-4 mt-3">
          <p className="text-6xl md:text-3xl lg:text-5xl text-[#D1A878] font-bold my-0">
            6+
          </p>
          <p className="sm:mt-1 md:mt-3 text-2xl md:text-xl lg:text-2xl font-semibold">
            Themes
          </p>
        </div>
        {/*  */}
        <div className="bg-[#541E1E66] sm:w-3/5 md:w-1/3 h-40 rounded-xl flex flex-col justify-center my-auto shadow-md items-center md:items-start shadow-[#ffe1683c] px-4 mt-3">
          <p className="text-6xl md:text-3xl lg:text-5xl text-[#D1A878] font-bold my-0">
            36+
          </p>
          <p className="text-2xl sm:mt-1 md:mt-3 md:text-xl lg:text-2xl font-semibold">
            Hours of Hacking
          </p>
        </div>
        {/*  */}
        <div className="bg-[#541E1E66] sm:w-3/5 md:w-1/3 h-40 rounded-xl flex flex-col justify-center my-auto  shadow-md items-center md:items-start shadow-[#ffe1683c] px-4 mt-3">
          <p className="text-6xl md:text-3xl lg:text-5xl text-[#D1A878] font-bold my-0">
            600+
          </p>
          <p className="text-2xl sm:mt-1 md:text-xl md:mt-3 lg:text-2xl font-semibold">
            Participants
          </p>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="m-2 flex flex-col md:flex-row p-2 justify-evenly w-full gap-12 lg:pt-6 md:px-10 lg:px-36">
        <div className="md:w-5/12 bg-[#70363666] rounded-2xl px-3 text-center py-4 text-sm md:px-5 md:pr-12 md:py-6 md:text-lg lg:px-10 lg:pr-20 lg:py-8 lg:text-2xl shadow-lg shadow-[#8484843c] text-opacity-90 font-thin text-slate-100 h-[10rem] md:h-[15.5rem] lg:h-[20rem] w-[95%] mx-auto overflow-scroll overflow-x-hidden hide-scroll">
          <b>ByteVerse 6.0: Forging the Odyssey of Development </b>
          <br /> Prepare to immerse yourself in 36 hours of unparalleled coding
          brilliance at ByteVerse 2.0! Dive into a whirlwind of brainstorming,
          problem-solving, and intense coding sessions meticulously crafted to
          ignite your programming genius. Join us in cultivating an environment
          where programmers unite to tackle challenges head-on, pushing the
          boundaries of technology and innovation. Together, we'll embark on a
          journey to uncover optimal solutions using the latest technologies,
          all while racing against the clock. ByteVerse 2.0 isn't just a
          hackathon; it's a playground for inventive minds to collaborate,
          innovate, and redefine what's possible in the world of coding. Are you
          geared then to unleash your coding prowess and leave your mark on
          ByteVerse 2.0? Let's create something extraordinary together!
        </div>
        <div className="w-[90%] mx-auto md:w-7/12 bg-[#70363666] shadow-lg shadow-[#8484843c] rounded-2xl lg:h-[20rem]">
          <img
            src={Images[currentImageIndex].src}
            alt={Images[currentImageIndex].alt}
            width={400}
            height={400}
            className="h-full w-full object-cover rounded-lg transition-opacity duration-1000"
          />
        </div>
      </div>
    </main>
  );
};

export default Archive;
