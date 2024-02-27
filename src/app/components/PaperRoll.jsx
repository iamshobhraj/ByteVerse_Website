"use client";
import Link from "next/link";
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
      <div className=" py-0 lg:mt-32 lg:py-24 pb-20 lg:pb-40 flex flex-col align-middle w-[90vw] ">
        <img
          src="/PaperRoll.svg"
          className="absolute w-[85%] left-1/2 -translate-x-1/2 z-0 hidden xl:block"
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
        <div className="lg:text-lg md:text-2xl lg:text-opacity-95 text-opacity-75 text-cl font-semibold lg:pt-4 pt-16 text-center z-20 opacity-95 xl:opacity-100 text-slate-100 xl:text-[#350909] w-3/5 m-auto">
          <Link
            href="https://bit.ly/byteverse24rulebook"
            className="pt-4"
            legacyBehavior
          >
            <a
              className="text-3xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] opacity-90 rounded-xl font-bold md:mt-2 xl:mt-7 px-4 inline-block font-japanese"
              target="_blank"
              rel="noopener noreferrer"
            >
              RULEBOOK
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaperRoll;
