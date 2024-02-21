"use client";
import { React, useState } from "react";
import Image from "next/image";

import Accordion from "./Accordion";

const FAQ = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const faqs = [
    {
      id: 0,
      query: "Who is eligible to participate in the hackathon?",
      ans: "Students from any part of the country are eligible to participate in the Byteverse hackathon.",
    },
    {
      id: 1,
      query: "What is the prize money for the winning teams?",
      ans: (
        <div>
          <p>The Prize money for the winning teams: </p>{" "}
          <ul className="list-disc list-inside">
            <li>1st Prize: ₹10,000</li>
            <li>2nd Prize: ₹8,000</li>
            <li>3rd Prize: ₹6,000</li>
            <li>Best All Girls Team: ₹5,000</li>
            <li>Best 1st Year Team: ₹3,000</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      query: "Will the hackathon be conducted online or physically?",
      ans: "The Byteverse hackathon will be conducted in hybrid mode i.e. both online and physically. Participants have the option to join remotely from anywhere with an internet connection or participate in person at the campus of NIT Patna.",
    },
    {
      id: 3,
      query: "Which domains will the hackathon cover?",
      ans: "The Byteverse hackathon will encompass various domains, including artificial intelligence, machine learning, web and android development and blockchain among others. Although, there are no tech domain limitations to the projects and exploration among domains is encouraged.",
    },
    {
      id: 4,
      query:
        "Are there additional perks and subscriptions for the winning team?",
      ans: "Yes, in addition to the cash prize, the winning team will receive exclusive perks such as access to industry experts, mentorship opportunities, and subscriptions to relevant software and services.",
    },
    {
      id: 5,
      query: "What is the duration of the hackathon?",
      ans: "The Byteverse hackathon will run for 36 hours, providing participants with an intensive yet rewarding experience over the course.",
    },
    {
      id: 6,
      query: "How many participants typically partake in the hackathon?",
      ans: "The Byteverse hackathon attracts 1500+ participants country-wide, fostering a diverse and collaborative environment for innovation and problem-solving.",
    },
  ];

  return (
    <div
      className="relative min-h-screen flex justify-center items-center"
      style={{
        background:
          "linear-gradient(180deg, #560202 0%, #670B0B 70% , #730d0d 100%)",
        // background:
        //   "linear-gradient(180deg, rgb(114,0,0) 0%,  rgb(172,0,0) 70%, #9f0b0b 100%)",
      }}
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Image src={"/byteverse/sword.png"} height={500} width={500} />
      </div>
      <div className="z-10 w-full h-auto flex flex-col lg:flex-row justify-evenly items-center md:px-48 p-4">
        <div className="w-full py-4  md:w-[600px]  flex flex-col justify-center items-center mb-6 md:mb-0 text-[#DEB889]  ">
          <h2 className="text-5xl mb-6 lg:ml-20 font-bold lg:text-start text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-md w-3/4 lg:text-start text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus,
            dignissimos at nostrum illum explicabo distinctio, sapiente, dolores
            nihil magnam praesentium? Ipsam et facilis alias! Temporibus nam hic
            consectetur tenetur.
          </p>
        </div>
        <div className="p-4 sm:w-full md:w-[400px] rounded-lg">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              title={faq.query}
              answer={faq.ans}
              expanded={expandedAccordion === faq.id}
              onToggle={() => toggleAccordion(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
