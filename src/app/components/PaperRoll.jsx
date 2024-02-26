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
          className="absolute w-11/12 left-1/2 -translate-x-1/2 z-0 hidden xl:block"
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
          <p className="pb-2 pt-4 text-xl lg:text-2xl xl:text-3xl font-japanese tracking-wider">
            {" "}
            Rulebook:{" "}
          </p>
          <Link
            href="https://bit.ly/byteverse24rulebook"
            className="pt-4"
            legacyBehavior
          >
            <a
              className="text-xl lg:text-2xl xl:text-3xl border lg:border-2 xl:border-4 border-slate-100 xl:border-[#4A0000] rounded-xl font-bold mt-4 py-2 px-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </Link>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3">
            <div className="py-4 pt-0">Quality Education</div>
            <div className="py-4 pt-0">Food Quality and Hunger</div>
            <div className="py-4 pt-0">Cybersecurity</div>
            <div className="py-4 pt-0">Healthcare and Medical</div>
            <div className="py-4 pt-0">Finance</div>
            <div className="py-4 pt-0">Sustainable Technology</div>
            <div className="py-4 pt-0">Law and Justice</div>
            <div className="py-4 pt-0">Community Building</div>
            <div className="py-4 pt-0">Disaster Management</div>
            <div className="py-4 pt-0">Space and Astrophysics</div>
            <div className="py-4 pt-0">Open Innovation</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PaperRoll;
