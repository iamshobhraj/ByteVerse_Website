import React from "react";
import Image from "next/image";
import rightKnife from "@/../public/byteverse/judgesKnife.svg";
import Category from "./category";
import slist from "./sponsors.json";
import bg from "@/../public/byteverse/bgsponsor.svg";

const Sponsors = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={bg}
          className="absolute lg:top-[-15rem]  top-[0rem] right-[3rem]  scale-[1.21] lg:scale-[1.06] w-[100vw]"
          style={{ zIndex: "0" }}
        ></Image>
        <div
          id="sponsors"
          className="top-0 w-full flex flex-col items-center sponsor-grad"
          style={{ zIndex: "20" }}
        >
          <Image
            src={rightKnife}
            className=" mt-36"
            style={{ scale: "80%", zIndex: "10" }}
          />
          <Category title="TITLE SPONSORS" items={slist["title-sponsors"]} />
          <Category
            title="ASSOCIATE SPONSORS"
            items={slist["associate-sponsors"]}
          />
          <Category
            title="SUBEVENT SPONSORS"
            items={slist["sub-event-sponsors"]}
          />
        </div>
      </div>
    </>
  );
};
export default Sponsors;
