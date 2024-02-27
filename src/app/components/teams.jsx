"use client";
import { Tabs } from "./ui/tabs";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import teamKnife from "@/../public/byteverse/team-sword.svg";
import { cn } from "@/lib/utils";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import teams from "./teams.json";
import judges from "./judges.json";
import Autoplay from "embla-carousel-autoplay";

const Carousl = ({ listt }) => {
  return (
    <Carousel
      type="teams"
      plugins={[
        Autoplay({
          duration: 1600,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-5/6 h-96"
    >
      <CarouselContent>
        {listt.map((item, index) => (
          <CarouselItem
            key={index}
            className={`basis-1/2 sm:basis-1/3 lg:pl-6 pl-1 relative  ${
              "team" + index
            }`}
          >
            <div className="p-1 flex w-full items-center justify-center">
              <Card className="rounded-full relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:size-64">
                <CardContent className=" flex h-full relative overflow-hidden rounded-full border-[#C89E6D] border-solid border">
                  <img
                    src={item.photo}
                    alt={`teams`}
                    className="object-cover rounded-full h-full absolute scale-75 -right-6 md:-right-9"
                  />
                  <div className="border-[#C89E6D] border-solid border rounded-full relative h-full w-full scale-90 -right-3 md:-right-4 lg:-right-6">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        className="cursor-pointer relative lg:top-12 md:top-8 right-1 sm:top-5 top-4 md:text-4xl text-3xl bg-white"
                      >
                        <AiFillGithub style={{ fill: "#C89E6D" }} />
                      </a>
                    )}
                    {(item.linkedin && item.github) ||
                    (item.linkedin && item.X) ? (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        className="cursor-pointer relative lg:top-20 md:top-12 right-4 sm:top-8 top-6 md:text-4xl text-3xl bg-white"
                      >
                        <AiFillLinkedin style={{ fill: "#C89E6D" }} />
                      </a>
                    ) : (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        className="cursor-pointer relative lg:top-28 md:top-20 right-4 sm:top-16 top-12 md:text-4xl text-3xl bg-white"
                      >
                        <AiFillLinkedin style={{ fill: "#C89E6D" }} />
                      </a>
                    )}
                    {item.X && (
                      <a
                        href={item.X}
                        target="_blank"
                        className="cursor-pointer relative lg:top-28 md:top-16 -right-1 sm:top-12 top-8 md:text-4xl text-3xl bg-white"
                      >
                        <AiFillTwitterCircle style={{ fill: "#C89E6D" }} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="gap-1 flex flex-col py-2 leading-3">
              <h3 className=" text-xl text-center md:text-2xl font-semibold leading-6 tracking-tight text-white">
                <span
                  className={cn(
                    item.name == "Simranpreet Kaur"
                      ? "tracking tracking-wide"
                      : "",
                    item.name == "Raj Aarzoo Singh"
                      ? "tracking tracking-wide"
                      : ""
                  )}
                >
                  {item.name}
                </span>
              </h3>
              <CardTitle className=" text-xs text-center md:text-base text-[#C89E6D]">
                {item.designation}
              </CardTitle>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious variant="teams" />
      <CarouselNext variant="teams" />
    </Carousel>
  );
};
export default function Teams() {
  const tabs = [
    {
      title: "Leads",
      value: "leads",
      content: (
        <div className="flex flex-col gap-6 items-center w-full overflow-hidden relative h-1/2 md:h-fit rounded-2xl py-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-[#520101] via-[#FF2020] to-[#520101]">
          <p>Leads</p>
          <Carousl listt={teams.Leads} />
        </div>
      ),
    },
    {
      title: "Web",
      value: "Web",
      content: (
        <div className="flex flex-col gap-6 items-center w-full overflow-hidden relative h-1/2 md:h-fit rounded-2xl py-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-[#520101] via-[#FF2020] to-[#520101]">
          <p>Web</p>
          <Carousl listt={teams.Web} />
        </div>
      ),
    },
    {
      title: "Outreach",
      value: "outreach",
      content: (
        <div className="flex flex-col gap-6 items-center w-full overflow-hidden relative h-1/2 md:h-fit rounded-2xl py-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-[#520101] via-[#FF2020] to-[#520101]">
          <p>Outreach</p>
          <Carousl listt={teams.Outreach} />
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="flex flex-col gap-6 items-center w-full overflow-hidden relative h-1/2 md:h-fit rounded-2xl py-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-[#520101] via-[#FF2020] to-[#520101]">
          <p>Design</p>
          <Carousl listt={teams.Design} />
        </div>
      ),
    },
    {
      title: "Event",
      value: "event",
      content: (
        <div className="flex flex-col gap-6 items-center w-full overflow-hidden relative h-1/2 md:h-fit rounded-2xl py-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-[#520101] via-[#FF2020] to-[#520101]">
          <p>Event</p>
          <Carousl listt={teams.Event} />
        </div>
      ),
    },
    {
      title: "Marketing",
      value: "marketing",
      content: (
        <div className="flex flex-col gap-6 items-center w-full overflow-hidden relative h-1/2 md:h-fit rounded-2xl py-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-[#520101] via-[#FF2020] to-[#520101]">
          <p>Marketing</p>
          <Carousl listt={teams.Marketing} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[60rem] [perspective:1000px] relative b flex flex-col team-grad items-center justify-center pt-16 lg:pt-0">
      <Image src={teamKnife} className="" style={{ scale: "80%" }} />
      <Tabs tabs={tabs} />
    </div>
  );
}
