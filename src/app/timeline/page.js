import React from "react";
import FooterSection from "../components/footer";
import TimelineHero from "../components/TimelineHero";
import Schedule from "../components/Schedule";
import CountdownUI from "../components/CountdownUI"

export default function Home() {
  return (
    <main>
      <TimelineHero />
      <CountdownUI />
      <Schedule />
      <FooterSection />
    </main>
  );
}
