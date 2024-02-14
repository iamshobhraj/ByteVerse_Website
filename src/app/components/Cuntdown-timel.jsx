"use client";
import CountdownUI from "../components/countdownUI";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import Countdown from "./countdown";

export default function Cuntdowntimel() {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const rotateImage = () => {
      setRotationAngle((prevAngle) => prevAngle + 1);
      requestAnimationFrame(rotateImage);
    };

    rotateImage();

    return () => cancelAnimationFrame(rotateImage);
  }, []);

  const targetDate = "2024-04-13T12:00:00";

  return (
    <div className="flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <motion.img
          src="/byteverse/weapon.svg"
          className="lg:block w-12 md:w-16 mr-4"
          alt="Rotating Image"
          style={{
            opacity: 0.6,
          }}
          animate={{ rotate: rotationAngle }}
          transition={{ loop: Infinity, duration: 0.1 }}
        />
        <h1 className="text-white text-center font-semibold text-2xl mt-2 md:mt-4 md:text-[2.75rem] tracking-wide font-japanese opacity-85">
          COUNTDOWN
        </h1>
        <motion.img
          src="/byteverse/weapon.svg"
          className="lg:block w-12 md:w-16 ml-4"
          alt="Rotating Image"
          style={{
            opacity: 0.6,
          }}
          animate={{ rotate: rotationAngle }}
          transition={{ loop: Infinity, duration: 0.1 }}
        />
      </div>
      <Countdown targetDate={targetDate} />
    </div>
  );
}
