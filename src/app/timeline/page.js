import React from "react";
import FooterSection from "../components/footer";
import TimelineHero from "../components/TimelineHero";
import Schedule from "../components/Schedule";
import Countdowntimel from "../components/Cuntdown-timel"

export default function Home() {
  return (
    <main>
      <TimelineHero />
      <Countdowntimel />
      <Schedule />
      <FooterSection />
    </main>
  );
}
