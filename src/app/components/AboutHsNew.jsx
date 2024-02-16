// pages/about.js
"use client";
import React from "react";
import AboutIamge from "./AboutIamge";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const AboutUs = (props) => {
  const desco_link = "";
  const desco_insta = "";

  const gdsc_link = "";
  const gdsc_insta = "";

  return (
    <main
      id="about"
      className="flex flex-col  md:justify-start items-center h-screen  "
    >
      <div className=" mt-8">
        <AboutIamge />
      </div>
      <main className="flex flex-col md:flex-row pt-5 lg:pt-24 mb-4 px:8 md:px-4 lg:px-32">
        <div className="flex flex-col items-center mt-2 bg-[#391313cf] rounded-2xl py-8 mx-4">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 h-28 flex flex-col">
            <img
              className="mx-auto -mt-2 md:mt-10 scale-[0.4] md:scale-[2] lg:scale-[1.6]"
              src="/byteverse/hackkkk.png"
            />
          </div>
          <div className="w-full px-4 lg:px-10">
            <p className="md:pt-8 text-white text-justify text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum
              may be used as a placeholder before final copy is available.
              adipiscing elit. consectetur adipiscing elit. ... used as a placeh
              Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum
              may be used as a placeholder before final copy is available.
              adipiscing elit. consectetur adipiscing elit. ... used as a placeh
            </p>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-5 pt-6">
            <Link href={gdsc_insta} target="_blank">
              <div className="text-white hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={30} />
              </div>
            </Link>
            <Link href={gdsc_link} target="_blank">
              <div className="text-white hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={30} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 bg-[#391313cf] rounded-2xl py-8 mx-4">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 h-28 flex flex-col">
            <img
              className="mx-auto mt-2 md:mt-12 lg:mt-12 scale-[0.6] md:scale-[2.6] lg:scale-[2.4]"
              src="/byteverse/Gdsclogo.png"
            />
          </div>
          <div className="w-full px-4 lg:px-10">
            <p className="md:pt-8 text-white text-justify text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum
              may be used as a placeholder before final copy is available.
              adipiscing elit. consectetur adipiscing elit. ... used as a placeh
              Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum
              may be used as a placeholder before final copy is available.
              adipiscing elit. consectetur adipiscing elit. ... used as a placeh
            </p>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-5 pt-6">
            <Link href={gdsc_insta} target="_blank">
              <div className="text-white hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={30} />
              </div>
            </Link>
            <Link href={gdsc_link} target="_blank">
              <div className="text-white hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={30} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 bg-[#391313cf] rounded-2xl py-8 mx-4">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 h-28 flex flex-col">
            <img
              className="mx-auto -mt-16 md:mt-6 md:scale-[1.2] scale-[0.34] lg:scale-[1]"
              src="/byteverse/desco.png"
            />
          </div>
          <div className="w-full px-4 lg:px-10">
            <p className="md:pt-8 text-white text-justify text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum
              may be used as a placeholder before final copy is available.
              adipiscing elit. consectetur adipiscing elit. ... used as a placeh
              Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum
              may be used as a placeholder before final copy is available.
              adipiscing elit. consectetur adipiscing elit. ... used as a placeh
            </p>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-5 pt-6">
            <Link href={gdsc_insta} target="_blank">
              <div className="text-white hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={30} />
              </div>
            </Link>
            <Link href={gdsc_link} target="_blank">
              <div className="text-white hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={30} />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
};

export default AboutUs;
