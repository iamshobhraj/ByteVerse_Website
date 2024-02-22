// pages/about.js
"use client";
import React from "react";
import AboutIamge from "./AboutIamge";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Archive from "./archive";
const AboutUs = (props) => {
  const desco_link = "https://www.linkedin.com/company/desco-nitp/";
  const desco_insta =
    "https://www.instagram.com/desco.nitp?igsh=MTl0MnE4MXJtbTNzcg==";

  const gdsc_link = "https://www.linkedin.com/company/gdscnitp/";
  const gdsc_insta =
    "https://www.instagram.com/gdscnitp?igsh=MXY0cTM4YWo5dGx1dw==";
  const hs_insta =
    "https://www.instagram.com/hackslash.nitp?igsh=c3QxbTF5OW84eXpu";
  const hs_link = "https://www.linkedin.com/company/hackslash/";

  return (
    <main
      id="about"
      className="flex flex-col  md:justify-start items-center h-screen  "
    >
      <div className=" mt-8">
        <AboutIamge />
      </div>
      <Archive />
      <div className="flex flex-col gap-6 md:flex-row pt-3 lg:pt-16 mb-4 px:8 md:px-4 lg:px-20 xl:px-24">
        <div className="flex flex-col items-center mt-2 bg-[#441919cf] cursor-pointer hover:shadow-md rounded-2xl py-4 md:py-8 mx-4">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 h-24 md:h-28 flex flex-col">
            <img
              className="mx-auto -mt-2 md:mt-10 scale-[0.4] md:scale-[2] lg:scale-[1.6]"
              src="/byteverse/hackkkk.png"
            />
          </div>
          <div className="w-full px-4 lg:px-10">
            <p className="md:pt-8 text-white text-center text-sm md:text-base lg:text-lg lg:h-[20rem]">
              Hackslash Developer's Club NIT Patna established with the vision
              of fostering a culture of innovation and collaboration. Hackslash
              is a dynamic community of developers, designers and tech
              enthusiasts dedicated to pushing the boundaries of technology and
              making a positive impact through innovative solutions.
            </p>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-5 pt-6">
            <Link href={hs_insta} target="_blank">
              <div className="text-white hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={30} />
              </div>
            </Link>
            <Link href={hs_link} target="_blank">
              <div className="text-white hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={30} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 bg-[#441919cf] cursor-pointer hover:shadow-md rounded-2xl py-4 md:py-8 mx-4">
          <div className="w-full md:w-1/4 mb-8 md:mb-0 h-24 md:h-28 flex flex-col">
            <img
              className="mx-auto  md:mt-12 lg:mt-12 scale-[0.6] md:scale-[2.6] lg:scale-[2.4]"
              src="/byteverse/Gdsclogo.png"
            />
          </div>
          <div className="w-full px-4  lg:px-10">
            <p className="md:pt-8 text-white text-center text-sm md:text-base lg:text-lg lg:h-[20rem]">
              GDSC NIT Patna is a hub for innovation and community building
              where student can learn, connect and grow their skills through
              various projects, events and mentorship programs. GDSC aim to
              empower students to develop real- world solutions using Google
              technologies.
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
        <div className="flex flex-col items-center mt-2 bg-[#441919cf] cursor-pointer hover:shadow-md rounded-2xl py-4 md:py-8 mx-4">
          <div className="w-full md:w-1/4 mb-8 md:mb-0 h-24 md:h-28 flex flex-col">
            <img
              className="mx-auto -mt-16 lg:mt-4 md:mt-7 md:scale-[1.14] scale-[0.24] lg:scale-[1]"
              src="/byteverse/desco.png"
            />
          </div>
          <div className="w-full px-4  lg:px-10">
            <p className="md:pt-8 text-white text-center text-sm md:text-base lg:text-lg lg:h-[20rem]">
              The premier Design Company at the NIT Patna where creativity meets
              innovation to shape the future.Desco is dedicated to nurturing a
              community of designers, thinkers and creators. Desco provides
              real-world experience through workshops, design challenges and
              collaborative projects.
            </p>
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-5 pt-6">
            <Link href={desco_insta} target="_blank">
              <div className="text-white hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={30} />
              </div>
            </Link>
            <Link href={desco_link} target="_blank">
              <div className="text-white hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
