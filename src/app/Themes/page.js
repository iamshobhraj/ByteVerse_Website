import React from "react";
import FooterSection from "../components/footer";
import ThemesHero from "../components/ThemesHero";
import Theem from "../components/themecomponent";
import Tracks from "../components/tracks";
import SpecialTracks from "../components/specialTracks";
import SideTracks from "../components/sideTracks";
import Image from "next/image";
import baadal1 from "@/../public/byteverse/hero/baadal1.svg";
import baadal2 from "@/../public/byteverse/hero/baadal2.svg";

const ThemePage = () => {
  return (
    <main id="themes" className="bg-[#720D0D] absolute">
      <ThemesHero />
      <div
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #460202 100%",
        }}
      >
        <Theem />
        <Tracks />
        <SpecialTracks />
      </div>

      <div
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #720d0d 100%",
        }}
      >
        <SideTracks />
      </div>
      <div className="p-4 items-center flex justify-center flex-col overflow-hidden">
        <Image src={baadal1} alt="cloud" className=" z-10 md:-translate-x-64 translate-y-28" />
        <Image src={baadal2} alt="cloud" className=" z-10 md:translate-x-48 translate-y-28" />
      </div>

      <FooterSection />
    </main>
  );
};

export default ThemePage;
