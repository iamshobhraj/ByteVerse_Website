"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PaperRoll = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const rotateImage = () => {
      setRotationAngle((prevAngle) => prevAngle + 1);
      requestAnimationFrame(rotateImage);
    };

    rotateImage();

    return () => cancelAnimationFrame(rotateImage);
  }, []);

  return (
    <section id="rules" className="py-8 bg-[#4A0000] flex justify-center">
      <div className=" py-0 lg:py-20 pb-20 lg:pb-40 flex flex-col align-middle w-[90vw] ">
        <img
          src="/PaperRoll.svg"
          className="absolute w-11/12 left-1/2 -translate-x-1/2 z-0 hidden lg:block"
        ></img>
        <div className="flex flex-row justify-center px-6 md:px-24 lg:px-60 pt-[6rem]">
          <motion.img
            src="/byteverse/weapon.svg"
            className="hidden lg:block w-32 m-auto"
            alt="Rotating Image"
            style={{
              zIndex: 10,
              opacity: 0.6,
            }}
            animate={{ rotate: rotationAngle }}
            transition={{ loop: Infinity, duration: 0.1 }}
          />
          <img
            src="/Byteverse24_Logo2.png"
            className="z-10 lg:m-auto px-10 opacity-60"
          ></img>
          <motion.img
            src="/byteverse/weapon.svg"
            className="hidden lg:block w-32 m-auto"
            alt="Rotating Image"
            style={{
              zIndex: 10,
              opacity: 0.6,
            }}
            animate={{ rotate: rotationAngle }}
            transition={{ loop: Infinity, duration: 0.1 }}
          />
        </div>
        <p className="lg:text-lg md:text-2xl lg:text-opacity-95 text-opacity-75 text-cl font-semibold lg:pt-8 text-center z-20 text-white lg:text-[#350909] w-3/5 m-auto pt-16 ">
          Themes for the Hackathon are:
        </p>
      </div>
    </section>
  );
};

export default PaperRoll;
