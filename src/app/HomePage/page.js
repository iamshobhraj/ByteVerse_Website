import React from "react";
import FooterSection from "../components/footer";
import About from "../components/AboutUs";

import Judges from "../components/judge";
import Hero from "../components/Hero";
import PaperRoll from "../components/PaperRoll";
import Sponsors from "../components/sponsor/sponsors";
import FAQ from "../components/FAQ";
import Teams from "../components/teams";
import AboutUs from "../components/AboutHsNew";
import Prizes from "../components/Prizes";
import Archive from "../components/archive";

const HomePage = () => {
  return (
    <main id="home" className="bg-[#720D0D]">
      <Hero />
      <div id="about" className="  h-[2500px] md:h-[1400px] gradient-bg  p-4">
        <AboutUs />
      </div>

      <PaperRoll />

      <Judges />
      <Sponsors />
      <Prizes />
      <Teams />
      <FAQ />
      <FooterSection />
    </main>
  );
};

export default HomePage;
